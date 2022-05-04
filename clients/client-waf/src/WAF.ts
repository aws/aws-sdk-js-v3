// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateByteMatchSetCommand,
  CreateByteMatchSetCommandInput,
  CreateByteMatchSetCommandOutput,
} from "./commands/CreateByteMatchSetCommand";
import {
  CreateGeoMatchSetCommand,
  CreateGeoMatchSetCommandInput,
  CreateGeoMatchSetCommandOutput,
} from "./commands/CreateGeoMatchSetCommand";
import { CreateIPSetCommand, CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRateBasedRuleCommand,
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "./commands/CreateRateBasedRuleCommand";
import {
  CreateRegexMatchSetCommand,
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "./commands/CreateRegexMatchSetCommand";
import {
  CreateRegexPatternSetCommand,
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateRuleGroupCommand,
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
} from "./commands/CreateRuleGroupCommand";
import {
  CreateSizeConstraintSetCommand,
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "./commands/CreateSizeConstraintSetCommand";
import {
  CreateSqlInjectionMatchSetCommand,
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "./commands/CreateSqlInjectionMatchSetCommand";
import {
  CreateWebACLCommand,
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput,
} from "./commands/CreateWebACLCommand";
import {
  CreateWebACLMigrationStackCommand,
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
} from "./commands/CreateWebACLMigrationStackCommand";
import {
  CreateXssMatchSetCommand,
  CreateXssMatchSetCommandInput,
  CreateXssMatchSetCommandOutput,
} from "./commands/CreateXssMatchSetCommand";
import {
  DeleteByteMatchSetCommand,
  DeleteByteMatchSetCommandInput,
  DeleteByteMatchSetCommandOutput,
} from "./commands/DeleteByteMatchSetCommand";
import {
  DeleteGeoMatchSetCommand,
  DeleteGeoMatchSetCommandInput,
  DeleteGeoMatchSetCommandOutput,
} from "./commands/DeleteGeoMatchSetCommand";
import { DeleteIPSetCommand, DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeletePermissionPolicyCommand,
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand";
import {
  DeleteRateBasedRuleCommand,
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "./commands/DeleteRateBasedRuleCommand";
import {
  DeleteRegexMatchSetCommand,
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "./commands/DeleteRegexMatchSetCommand";
import {
  DeleteRegexPatternSetCommand,
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteRuleGroupCommand,
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput,
} from "./commands/DeleteRuleGroupCommand";
import {
  DeleteSizeConstraintSetCommand,
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "./commands/DeleteSizeConstraintSetCommand";
import {
  DeleteSqlInjectionMatchSetCommand,
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "./commands/DeleteSqlInjectionMatchSetCommand";
import {
  DeleteWebACLCommand,
  DeleteWebACLCommandInput,
  DeleteWebACLCommandOutput,
} from "./commands/DeleteWebACLCommand";
import {
  DeleteXssMatchSetCommand,
  DeleteXssMatchSetCommandInput,
  DeleteXssMatchSetCommandOutput,
} from "./commands/DeleteXssMatchSetCommand";
import {
  GetByteMatchSetCommand,
  GetByteMatchSetCommandInput,
  GetByteMatchSetCommandOutput,
} from "./commands/GetByteMatchSetCommand";
import {
  GetChangeTokenCommand,
  GetChangeTokenCommandInput,
  GetChangeTokenCommandOutput,
} from "./commands/GetChangeTokenCommand";
import {
  GetChangeTokenStatusCommand,
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "./commands/GetChangeTokenStatusCommand";
import {
  GetGeoMatchSetCommand,
  GetGeoMatchSetCommandInput,
  GetGeoMatchSetCommandOutput,
} from "./commands/GetGeoMatchSetCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetPermissionPolicyCommand,
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import {
  GetRateBasedRuleCommand,
  GetRateBasedRuleCommandInput,
  GetRateBasedRuleCommandOutput,
} from "./commands/GetRateBasedRuleCommand";
import {
  GetRateBasedRuleManagedKeysCommand,
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "./commands/GetRateBasedRuleManagedKeysCommand";
import {
  GetRegexMatchSetCommand,
  GetRegexMatchSetCommandInput,
  GetRegexMatchSetCommandOutput,
} from "./commands/GetRegexMatchSetCommand";
import {
  GetRegexPatternSetCommand,
  GetRegexPatternSetCommandInput,
  GetRegexPatternSetCommandOutput,
} from "./commands/GetRegexPatternSetCommand";
import { GetRuleCommand, GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import {
  GetRuleGroupCommand,
  GetRuleGroupCommandInput,
  GetRuleGroupCommandOutput,
} from "./commands/GetRuleGroupCommand";
import {
  GetSampledRequestsCommand,
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput,
} from "./commands/GetSampledRequestsCommand";
import {
  GetSizeConstraintSetCommand,
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "./commands/GetSizeConstraintSetCommand";
import {
  GetSqlInjectionMatchSetCommand,
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "./commands/GetSqlInjectionMatchSetCommand";
import { GetWebACLCommand, GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetXssMatchSetCommand,
  GetXssMatchSetCommandInput,
  GetXssMatchSetCommandOutput,
} from "./commands/GetXssMatchSetCommand";
import {
  ListActivatedRulesInRuleGroupCommand,
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "./commands/ListActivatedRulesInRuleGroupCommand";
import {
  ListByteMatchSetsCommand,
  ListByteMatchSetsCommandInput,
  ListByteMatchSetsCommandOutput,
} from "./commands/ListByteMatchSetsCommand";
import {
  ListGeoMatchSetsCommand,
  ListGeoMatchSetsCommandInput,
  ListGeoMatchSetsCommandOutput,
} from "./commands/ListGeoMatchSetsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  ListRateBasedRulesCommand,
  ListRateBasedRulesCommandInput,
  ListRateBasedRulesCommandOutput,
} from "./commands/ListRateBasedRulesCommand";
import {
  ListRegexMatchSetsCommand,
  ListRegexMatchSetsCommandInput,
  ListRegexMatchSetsCommandOutput,
} from "./commands/ListRegexMatchSetsCommand";
import {
  ListRegexPatternSetsCommand,
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "./commands/ListRuleGroupsCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSizeConstraintSetsCommand,
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "./commands/ListSizeConstraintSetsCommand";
import {
  ListSqlInjectionMatchSetsCommand,
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "./commands/ListSqlInjectionMatchSetsCommand";
import {
  ListSubscribedRuleGroupsCommand,
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "./commands/ListSubscribedRuleGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommand, ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import {
  ListXssMatchSetsCommand,
  ListXssMatchSetsCommandInput,
  ListXssMatchSetsCommandOutput,
} from "./commands/ListXssMatchSetsCommand";
import {
  PutLoggingConfigurationCommand,
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import {
  PutPermissionPolicyCommand,
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateByteMatchSetCommand,
  UpdateByteMatchSetCommandInput,
  UpdateByteMatchSetCommandOutput,
} from "./commands/UpdateByteMatchSetCommand";
import {
  UpdateGeoMatchSetCommand,
  UpdateGeoMatchSetCommandInput,
  UpdateGeoMatchSetCommandOutput,
} from "./commands/UpdateGeoMatchSetCommand";
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateRateBasedRuleCommand,
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "./commands/UpdateRateBasedRuleCommand";
import {
  UpdateRegexMatchSetCommand,
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "./commands/UpdateRegexMatchSetCommand";
import {
  UpdateRegexPatternSetCommand,
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleCommand, UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateRuleGroupCommand,
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
} from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSizeConstraintSetCommand,
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "./commands/UpdateSizeConstraintSetCommand";
import {
  UpdateSqlInjectionMatchSetCommand,
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "./commands/UpdateSqlInjectionMatchSetCommand";
import {
  UpdateWebACLCommand,
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
} from "./commands/UpdateWebACLCommand";
import {
  UpdateXssMatchSetCommand,
  UpdateXssMatchSetCommandInput,
  UpdateXssMatchSetCommandOutput,
} from "./commands/UpdateXssMatchSetCommand";
import { WAFClient } from "./WAFClient";

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 	        <p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions,
 * 	      data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
 * 	      <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>
 */
export class WAF extends WAFClient {
  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a
   * 			web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string.
   * 			For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers
   * 			that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p>
   * 		       <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateByteMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateByteMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateByteMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect
   * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateByteMatchSetCommandOutput>;
  public createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    cb: (err: any, data?: CreateByteMatchSetCommandOutput) => void
  ): void;
  public createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateByteMatchSetCommandOutput) => void
  ): void;
  public createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateByteMatchSetCommandOutput) => void),
    cb?: (err: any, data?: CreateByteMatchSetCommandOutput) => void
  ): Promise<CreateByteMatchSetCommandOutput> | void {
    const command = new CreateByteMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country
   * 			that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p>
   * 		       <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateGeoMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateGeoMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateGeoMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGeoMatchSetCommandOutput>;
  public createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    cb: (err: any, data?: CreateGeoMatchSetCommandOutput) => void
  ): void;
  public createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGeoMatchSetCommandOutput) => void
  ): void;
  public createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGeoMatchSetCommandOutput) => void),
    cb?: (err: any, data?: CreateGeoMatchSetCommandOutput) => void
  ): Promise<CreateGeoMatchSetCommandOutput> | void {
    const command = new CreateGeoMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates an <a>IPSet</a>, which you use to specify which web requests
   *          that
   *          you want to allow or block based on the IP addresses that the requests
   *          originate from. For example, if you're receiving a lot of requests from one or more
   *          individual IP addresses or one or more ranges of IP addresses and you want to block the
   *          requests, you can create an <code>IPSet</code> that contains those IP addresses and then
   *          configure AWS WAF to block the requests. </p>
   * 		       <p>To create and configure an <code>IPSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateIPSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateIPSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateIPSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
  public createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
  public createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;
  public createIPSet(
    args: CreateIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIPSetCommandOutput) => void),
    cb?: (err: any, data?: CreateIPSetCommandOutput) => void
  ): Promise<CreateIPSetCommandOutput> | void {
    const command = new CreateIPSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a
   *             <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows
   *                 from a specified IP address in a five-minute period.
   *                 The <code>RateBasedRule</code> also
   *          contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other
   *          predicates that identify the requests that you want to count or block if these requests
   *          exceed the <code>RateLimit</code>.</p>
   *          <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not
   *          only must exceed the <code>RateLimit</code>, but it also must match all the
   *          conditions to be counted or blocked. For example, suppose you add the following to a
   *             <code>RateBasedRule</code>:</p>
   *          <ul>
   *             <li>
   *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the
   *                   <code>User-Agent</code> header</p>
   *             </li>
   *          </ul>
   *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
   *          <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that
   *          you want to block requests that meet the conditions in the rule. For a request to be
   *          blocked, it must come from the IP address 192.0.2.44 <i>and</i> the
   *             <code>User-Agent</code> header in the request must contain the value
   *          <code>BadBot</code>. Further, requests that match these two conditions must be received at
   *          a rate of more than 1,000 requests every five minutes. If both conditions are met and the
   *          rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a
   *          five-minute period, AWS WAF no longer blocks the requests.</p>
   *
   * 		       <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a
   *             <code>RateBasedRule</code>:</p>
   *
   *
   *          <ul>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>TargetString</code> of <code>login</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
   *          <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
   *
   *
   *          <p>To create and configure a <code>RateBasedRule</code>, perform the following
   *          steps:</p>
   *          <ol>
   *             <li>
   *                <p>Create and update the predicates that you want to include in the rule. For more
   *                information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>,
   *                and <a>CreateSqlInjectionMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
   *                in the <code>ChangeToken</code> parameter of a <code>CreateRule</code>
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateRateBasedRule</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the
   *                   <code>ChangeToken</code> parameter of an <a>UpdateRule</a>
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates
   *                that you want to include in the rule.</p>
   *             </li>
   *             <li>
   *                <p>Create and update a <code>WebACL</code> that contains the
   *                   <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p>
   *             </li>
   *          </ol>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests,
   *          see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer
   *             Guide</a>.</p>
   */
  public createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRateBasedRuleCommandOutput>;
  public createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    cb: (err: any, data?: CreateRateBasedRuleCommandOutput) => void
  ): void;
  public createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRateBasedRuleCommandOutput) => void
  ): void;
  public createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRateBasedRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRateBasedRuleCommandOutput) => void
  ): Promise<CreateRateBasedRuleCommandOutput> | void {
    const command = new CreateRateBasedRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a
   *          web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string.
   *          For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers
   *          that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
   *          <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   *                   <code>CreateRegexMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateRegexMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   *                   <code>UpdateRegexMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect
   *                   (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   *             <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegexMatchSetCommandOutput>;
  public createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    cb: (err: any, data?: CreateRegexMatchSetCommandOutput) => void
  ): void;
  public createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegexMatchSetCommandOutput) => void
  ): void;
  public createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRegexMatchSetCommandOutput) => void),
    cb?: (err: any, data?: CreateRegexMatchSetCommandOutput) => void
  ): Promise<CreateRegexMatchSetCommandOutput> | void {
    const command = new CreateRegexMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
   * 		       <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   *                   <code>CreateRegexPatternSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateRegexPatternSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   *                   <code>UpdateRegexPatternSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   *             <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegexPatternSetCommandOutput>;
  public createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void
  ): void;
  public createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void
  ): void;
  public createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRegexPatternSetCommandOutput) => void),
    cb?: (err: any, data?: CreateRegexPatternSetCommandOutput) => void
  ): Promise<CreateRegexPatternSetCommandOutput> | void {
    const command = new CreateRegexPatternSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects,
   *             <code>ByteMatchSet</code> objects, and other predicates that identify the requests that
   *          you want to block. If you add more than one predicate to a <code>Rule</code>, a request
   *          must match all of the specifications to be allowed or blocked. For example, suppose
   *          that
   *          you add the following to a <code>Rule</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p>
   *             </li>
   *          </ul>
   * 		       <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>.
   * 			For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request
   * 			must contain the value <code>BadBot</code>.</p>
   * 		       <p>To create and configure a <code>Rule</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see
   * 				<a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateRule</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateRule</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateRule</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p>
   *             </li>
   *             <li>
   *                <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  public createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  public createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleCommandOutput) => void
  ): Promise<CreateRuleCommandOutput> | void {
    const command = new CreateRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p>
   * 	        <p>Rule groups are subject to the following limits:</p>
   * 	        <ul>
   *             <li>
   *                <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p>
   *             </li>
   *             <li>
   *                <p>One rule group per web ACL.</p>
   *             </li>
   *             <li>
   *                <p>Ten rules per rule group.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): Promise<CreateRuleGroupCommandOutput> | void {
    const command = new CreateRuleGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a
   * 			web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string.
   * 			For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes.
   * 			You can then configure AWS WAF to reject those requests.</p>
   * 		       <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateSizeConstraintSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateSizeConstraintSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateSizeConstraintSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect
   * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSizeConstraintSetCommandOutput>;
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    cb: (err: any, data?: CreateSizeConstraintSetCommandOutput) => void
  ): void;
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSizeConstraintSetCommandOutput) => void
  ): void;
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSizeConstraintSetCommandOutput) => void),
    cb?: (err: any, data?: CreateSizeConstraintSetCommandOutput) => void
  ): Promise<CreateSizeConstraintSetCommandOutput> | void {
    const command = new CreateSizeConstraintSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a
   * 			specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p>
   * 		       <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateSqlInjectionMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateSqlInjectionMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to
   * 				allow, block, or count malicious SQL code.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSqlInjectionMatchSetCommandOutput>;
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void),
    cb?: (err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void
  ): Promise<CreateSqlInjectionMatchSetCommandOutput> | void {
    const command = new CreateSqlInjectionMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count.
   * 			AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p>
   * 		       <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match
   * 			any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p>
   * 		       <p>To create and configure a <code>WebACL</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>.
   * 				For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>,
   * 				<a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see
   * 				<a>CreateRule</a> and <a>UpdateRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateWebACL</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateWebACL</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateWebACL</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>,
   * 				to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createWebACL(
    args: CreateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebACLCommandOutput>;
  public createWebACL(args: CreateWebACLCommandInput, cb: (err: any, data?: CreateWebACLCommandOutput) => void): void;
  public createWebACL(
    args: CreateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebACLCommandOutput) => void
  ): void;
  public createWebACL(
    args: CreateWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWebACLCommandOutput) => void),
    cb?: (err: any, data?: CreateWebACLCommandOutput) => void
  ): Promise<CreateWebACLCommandOutput> | void {
    const command = new CreateWebACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket.
   *            Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2.
   *            Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p>
   *          <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF.
   *            For the full procedure, including caveats and manual steps to complete
   *            the migration and switch over to the new web ACL, see
   *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
   *   Developer Guide</a>.  </p>
   */
  public createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebACLMigrationStackCommandOutput>;
  public createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    cb: (err: any, data?: CreateWebACLMigrationStackCommandOutput) => void
  ): void;
  public createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebACLMigrationStackCommandOutput) => void
  ): void;
  public createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWebACLMigrationStackCommandOutput) => void),
    cb?: (err: any, data?: CreateWebACLMigrationStackCommandOutput) => void
  ): Promise<CreateWebACLMigrationStackCommandOutput> | void {
    const command = new CreateWebACLMigrationStackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks
   * 			in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p>
   * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>CreateXssMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>CreateXssMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateXssMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to
   * 				allow, block, or count cross-site scripting attacks.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateXssMatchSetCommandOutput>;
  public createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    cb: (err: any, data?: CreateXssMatchSetCommandOutput) => void
  ): void;
  public createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateXssMatchSetCommandOutput) => void
  ): void;
  public createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateXssMatchSetCommandOutput) => void),
    cb?: (err: any, data?: CreateXssMatchSetCommandOutput) => void
  ): Promise<CreateXssMatchSetCommandOutput> | void {
    const command = new CreateXssMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code>
   * 			or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p>
   * 		       <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteByteMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteByteMatchSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteByteMatchSetCommandOutput>;
  public deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    cb: (err: any, data?: DeleteByteMatchSetCommandOutput) => void
  ): void;
  public deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteByteMatchSetCommandOutput) => void
  ): void;
  public deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteByteMatchSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteByteMatchSetCommandOutput) => void
  ): Promise<DeleteByteMatchSetCommandOutput> | void {
    const command = new DeleteByteMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or
   * 			if it still includes any countries.</p>
   * 		       <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteGeoMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteGeoMatchSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGeoMatchSetCommandOutput>;
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    cb: (err: any, data?: DeleteGeoMatchSetCommandOutput) => void
  ): void;
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGeoMatchSetCommandOutput) => void
  ): void;
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGeoMatchSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteGeoMatchSetCommandOutput) => void
  ): Promise<DeleteGeoMatchSetCommandOutput> | void {
    const command = new DeleteGeoMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or
   * 			if it still includes any IP addresses.</p>
   * 		       <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteIPSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteIPSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
  public deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
  public deleteIPSet(
    args: DeleteIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;
  public deleteIPSet(
    args: DeleteIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIPSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): Promise<DeleteIPSetCommandOutput> | void {
    const command = new DeleteIPSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web
   *          ACL.</p>
   */
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggingConfigurationCommandOutput>;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): Promise<DeleteLoggingConfigurationCommandOutput> | void {
    const command = new DeleteLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes an IAM policy from the specified RuleGroup.</p>
   *          <p>The user making the request must be the owner of the RuleGroup.</p>
   */
  public deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionPolicyCommandOutput>;
  public deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    cb: (err: any, data?: DeletePermissionPolicyCommandOutput) => void
  ): void;
  public deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionPolicyCommandOutput) => void
  ): void;
  public deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePermissionPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePermissionPolicyCommandOutput) => void
  ): Promise<DeletePermissionPolicyCommandOutput> | void {
    const command = new DeletePermissionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if
   *          it's still used in any <code>WebACL</code> objects or if it still includes any predicates,
   *          such as <code>ByteMatchSet</code> objects.</p>
   *          <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
   *          <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following
   *          steps:</p>
   *          <ol>
   *             <li>
   *                <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more
   *                information, see <a>UpdateRateBasedRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
   *                in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code>
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteRateBasedRule</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRateBasedRuleCommandOutput>;
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    cb: (err: any, data?: DeleteRateBasedRuleCommandOutput) => void
  ): void;
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRateBasedRuleCommandOutput) => void
  ): void;
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRateBasedRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRateBasedRuleCommandOutput) => void
  ): Promise<DeleteRateBasedRuleCommandOutput> | void {
    const command = new DeleteRateBasedRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code>
   *         or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p>
   * 		       <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteRegexMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteRegexMatchSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegexMatchSetCommandOutput>;
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    cb: (err: any, data?: DeleteRegexMatchSetCommandOutput) => void
  ): void;
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegexMatchSetCommandOutput) => void
  ): void;
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegexMatchSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegexMatchSetCommandOutput) => void
  ): Promise<DeleteRegexMatchSetCommandOutput> | void {
    const command = new DeleteRegexMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code>
   *          or if the <code>RegexPatternSet</code> is not empty. </p>
   */
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegexPatternSetCommandOutput>;
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void
  ): void;
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void
  ): void;
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegexPatternSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void
  ): Promise<DeleteRegexPatternSetCommandOutput> | void {
    const command = new DeleteRegexPatternSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code>
   * 			objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p>
   * 		       <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
   * 		       <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteRule</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteRule</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  public deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code>
   *          objects or if it still includes any rules.</p>
   *          <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
   *          <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   *                <code>DeleteRuleGroup</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteRuleGroup</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): Promise<DeleteRuleGroupCommandOutput> | void {
    const command = new DeleteRuleGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code>
   * 			or if it still includes any <a>SizeConstraint</a> objects (any filters).</p>
   * 		       <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteSizeConstraintSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSizeConstraintSetCommandOutput>;
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    cb: (err: any, data?: DeleteSizeConstraintSetCommandOutput) => void
  ): void;
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSizeConstraintSetCommandOutput) => void
  ): void;
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSizeConstraintSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteSizeConstraintSetCommandOutput) => void
  ): Promise<DeleteSizeConstraintSetCommandOutput> | void {
    const command = new DeleteSizeConstraintSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's
   * 			still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p>
   * 		       <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see
   * 				<a>UpdateSqlInjectionMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteSqlInjectionMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSqlInjectionMatchSetCommandOutput>;
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void
  ): Promise<DeleteSqlInjectionMatchSetCommandOutput> | void {
    const command = new DeleteSqlInjectionMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p>
   * 		       <p>To delete a <code>WebACL</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteWebACL</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteWebACL</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteWebACL(
    args: DeleteWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebACLCommandOutput>;
  public deleteWebACL(args: DeleteWebACLCommandInput, cb: (err: any, data?: DeleteWebACLCommandOutput) => void): void;
  public deleteWebACL(
    args: DeleteWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebACLCommandOutput) => void
  ): void;
  public deleteWebACL(
    args: DeleteWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWebACLCommandOutput) => void),
    cb?: (err: any, data?: DeleteWebACLCommandOutput) => void
  ): Promise<DeleteWebACLCommandOutput> | void {
    const command = new DeleteWebACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's
   * 			still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p>
   * 		       <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
   * 		       <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see
   * 				<a>UpdateXssMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
   * 				<code>DeleteXssMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DeleteXssMatchSet</code> request.</p>
   *             </li>
   *          </ol>
   */
  public deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteXssMatchSetCommandOutput>;
  public deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    cb: (err: any, data?: DeleteXssMatchSetCommandOutput) => void
  ): void;
  public deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteXssMatchSetCommandOutput) => void
  ): void;
  public deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteXssMatchSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteXssMatchSetCommandOutput) => void
  ): Promise<DeleteXssMatchSetCommandOutput> | void {
    const command = new DeleteXssMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
   */
  public getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetByteMatchSetCommandOutput>;
  public getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    cb: (err: any, data?: GetByteMatchSetCommandOutput) => void
  ): void;
  public getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetByteMatchSetCommandOutput) => void
  ): void;
  public getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetByteMatchSetCommandOutput) => void),
    cb?: (err: any, data?: GetByteMatchSetCommandOutput) => void
  ): Promise<GetByteMatchSetCommandOutput> | void {
    const command = new GetByteMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p>
   * 		       <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request
   * 			and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second
   * 			<code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p>
   * 		       <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>,
   * 			which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the
   * 			status of your change token.</p>
   */
  public getChangeToken(
    args: GetChangeTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeTokenCommandOutput>;
  public getChangeToken(
    args: GetChangeTokenCommandInput,
    cb: (err: any, data?: GetChangeTokenCommandOutput) => void
  ): void;
  public getChangeToken(
    args: GetChangeTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeTokenCommandOutput) => void
  ): void;
  public getChangeToken(
    args: GetChangeTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChangeTokenCommandOutput) => void),
    cb?: (err: any, data?: GetChangeTokenCommandOutput) => void
  ): Promise<GetChangeTokenCommandOutput> | void {
    const command = new GetChangeTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is
   * 			one of the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet
   * 				in a call to create, update, or delete an AWS WAF object.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSYNC</code>: Propagation is complete.</p>
   *             </li>
   *          </ul>
   */
  public getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeTokenStatusCommandOutput>;
  public getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    cb: (err: any, data?: GetChangeTokenStatusCommandOutput) => void
  ): void;
  public getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeTokenStatusCommandOutput) => void
  ): void;
  public getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChangeTokenStatusCommandOutput) => void),
    cb?: (err: any, data?: GetChangeTokenStatusCommandOutput) => void
  ): Promise<GetChangeTokenStatusCommandOutput> | void {
    const command = new GetChangeTokenStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
   */
  public getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeoMatchSetCommandOutput>;
  public getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    cb: (err: any, data?: GetGeoMatchSetCommandOutput) => void
  ): void;
  public getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeoMatchSetCommandOutput) => void
  ): void;
  public getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGeoMatchSetCommandOutput) => void),
    cb?: (err: any, data?: GetGeoMatchSetCommandOutput) => void
  ): Promise<GetGeoMatchSetCommandOutput> | void {
    const command = new GetGeoMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
   */
  public getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
  public getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
  public getIPSet(
    args: GetIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;
  public getIPSet(
    args: GetIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIPSetCommandOutput) => void),
    cb?: (err: any, data?: GetIPSetCommandOutput) => void
  ): Promise<GetIPSetCommandOutput> | void {
    const command = new GetIPSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
   */
  public getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingConfigurationCommandOutput>;
  public getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;
  public getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;
  public getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): Promise<GetLoggingConfigurationCommandOutput> | void {
    const command = new GetLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the IAM policy attached to the RuleGroup.</p>
   */
  public getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionPolicyCommandOutput>;
  public getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    cb: (err: any, data?: GetPermissionPolicyCommandOutput) => void
  ): void;
  public getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionPolicyCommandOutput) => void
  ): void;
  public getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPermissionPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPermissionPolicyCommandOutput) => void
  ): Promise<GetPermissionPolicyCommandOutput> | void {
    const command = new GetPermissionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the <a>RateBasedRule</a> that is specified by the
   *             <code>RuleId</code> that you included in the <code>GetRateBasedRule</code>
   *          request.</p>
   */
  public getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedRuleCommandOutput>;
  public getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    cb: (err: any, data?: GetRateBasedRuleCommandOutput) => void
  ): void;
  public getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedRuleCommandOutput) => void
  ): void;
  public getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRateBasedRuleCommandOutput) => void),
    cb?: (err: any, data?: GetRateBasedRuleCommandOutput) => void
  ): Promise<GetRateBasedRuleCommandOutput> | void {
    const command = new GetRateBasedRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum
   *          number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed
   *          the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
   */
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput>;
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    cb: (err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void
  ): void;
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void
  ): void;
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void),
    cb?: (err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput> | void {
    const command = new GetRateBasedRuleManagedKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
   */
  public getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegexMatchSetCommandOutput>;
  public getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    cb: (err: any, data?: GetRegexMatchSetCommandOutput) => void
  ): void;
  public getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegexMatchSetCommandOutput) => void
  ): void;
  public getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegexMatchSetCommandOutput) => void),
    cb?: (err: any, data?: GetRegexMatchSetCommandOutput) => void
  ): Promise<GetRegexMatchSetCommandOutput> | void {
    const command = new GetRegexMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *         <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>
   */
  public getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegexPatternSetCommandOutput>;
  public getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void
  ): void;
  public getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void
  ): void;
  public getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegexPatternSetCommandOutput) => void),
    cb?: (err: any, data?: GetRegexPatternSetCommandOutput) => void
  ): Promise<GetRegexPatternSetCommandOutput> | void {
    const command = new GetRegexPatternSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
   */
  public getRule(args: GetRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleCommandOutput>;
  public getRule(args: GetRuleCommandInput, cb: (err: any, data?: GetRuleCommandOutput) => void): void;
  public getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  public getRule(
    args: GetRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRuleCommandOutput) => void),
    cb?: (err: any, data?: GetRuleCommandOutput) => void
  ): Promise<GetRuleCommandOutput> | void {
    const command = new GetRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p>
   * 	        <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>
   */
  public getRuleGroup(
    args: GetRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleGroupCommandOutput>;
  public getRuleGroup(args: GetRuleGroupCommandInput, cb: (err: any, data?: GetRuleGroupCommandOutput) => void): void;
  public getRuleGroup(
    args: GetRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleGroupCommandOutput) => void
  ): void;
  public getRuleGroup(
    args: GetRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: GetRuleGroupCommandOutput) => void
  ): Promise<GetRuleGroupCommandOutput> | void {
    const command = new GetRuleGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
   * 		       <p>
   *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
   * 			(such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
   * 			returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
   */
  public getSampledRequests(
    args: GetSampledRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSampledRequestsCommandOutput>;
  public getSampledRequests(
    args: GetSampledRequestsCommandInput,
    cb: (err: any, data?: GetSampledRequestsCommandOutput) => void
  ): void;
  public getSampledRequests(
    args: GetSampledRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSampledRequestsCommandOutput) => void
  ): void;
  public getSampledRequests(
    args: GetSampledRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSampledRequestsCommandOutput) => void),
    cb?: (err: any, data?: GetSampledRequestsCommandOutput) => void
  ): Promise<GetSampledRequestsCommandOutput> | void {
    const command = new GetSampledRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
   */
  public getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSizeConstraintSetCommandOutput>;
  public getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    cb: (err: any, data?: GetSizeConstraintSetCommandOutput) => void
  ): void;
  public getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSizeConstraintSetCommandOutput) => void
  ): void;
  public getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSizeConstraintSetCommandOutput) => void),
    cb?: (err: any, data?: GetSizeConstraintSetCommandOutput) => void
  ): Promise<GetSizeConstraintSetCommandOutput> | void {
    const command = new GetSizeConstraintSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
   */
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSqlInjectionMatchSetCommandOutput>;
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void),
    cb?: (err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void
  ): Promise<GetSqlInjectionMatchSetCommandOutput> | void {
    const command = new GetSqlInjectionMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
   */
  public getWebACL(args: GetWebACLCommandInput, options?: __HttpHandlerOptions): Promise<GetWebACLCommandOutput>;
  public getWebACL(args: GetWebACLCommandInput, cb: (err: any, data?: GetWebACLCommandOutput) => void): void;
  public getWebACL(
    args: GetWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebACLCommandOutput) => void
  ): void;
  public getWebACL(
    args: GetWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWebACLCommandOutput) => void),
    cb?: (err: any, data?: GetWebACLCommandOutput) => void
  ): Promise<GetWebACLCommandOutput> | void {
    const command = new GetWebACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
   */
  public getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetXssMatchSetCommandOutput>;
  public getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    cb: (err: any, data?: GetXssMatchSetCommandOutput) => void
  ): void;
  public getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetXssMatchSetCommandOutput) => void
  ): void;
  public getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetXssMatchSetCommandOutput) => void),
    cb?: (err: any, data?: GetXssMatchSetCommandOutput) => void
  ): Promise<GetXssMatchSetCommandOutput> | void {
    const command = new GetXssMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>ActivatedRule</a> objects.</p>
   */
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivatedRulesInRuleGroupCommandOutput>;
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    cb: (err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void
  ): void;
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void
  ): void;
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void
  ): Promise<ListActivatedRulesInRuleGroupCommandOutput> | void {
    const command = new ListActivatedRulesInRuleGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
   */
  public listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListByteMatchSetsCommandOutput>;
  public listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    cb: (err: any, data?: ListByteMatchSetsCommandOutput) => void
  ): void;
  public listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListByteMatchSetsCommandOutput) => void
  ): void;
  public listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListByteMatchSetsCommandOutput) => void),
    cb?: (err: any, data?: ListByteMatchSetsCommandOutput) => void
  ): Promise<ListByteMatchSetsCommandOutput> | void {
    const command = new ListByteMatchSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
   */
  public listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeoMatchSetsCommandOutput>;
  public listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    cb: (err: any, data?: ListGeoMatchSetsCommandOutput) => void
  ): void;
  public listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeoMatchSetsCommandOutput) => void
  ): void;
  public listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGeoMatchSetsCommandOutput) => void),
    cb?: (err: any, data?: ListGeoMatchSetsCommandOutput) => void
  ): Promise<ListGeoMatchSetsCommandOutput> | void {
    const command = new ListGeoMatchSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
   */
  public listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
  public listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
  public listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;
  public listIPSets(
    args: ListIPSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIPSetsCommandOutput) => void),
    cb?: (err: any, data?: ListIPSetsCommandOutput) => void
  ): Promise<ListIPSetsCommandOutput> | void {
    const command = new ListIPSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>
   */
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggingConfigurationsCommandOutput>;
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLoggingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): Promise<ListLoggingConfigurationsCommandOutput> | void {
    const command = new ListLoggingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>RuleSummary</a> objects.</p>
   */
  public listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRateBasedRulesCommandOutput>;
  public listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    cb: (err: any, data?: ListRateBasedRulesCommandOutput) => void
  ): void;
  public listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRateBasedRulesCommandOutput) => void
  ): void;
  public listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRateBasedRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRateBasedRulesCommandOutput) => void
  ): Promise<ListRateBasedRulesCommandOutput> | void {
    const command = new ListRateBasedRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
   */
  public listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegexMatchSetsCommandOutput>;
  public listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    cb: (err: any, data?: ListRegexMatchSetsCommandOutput) => void
  ): void;
  public listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegexMatchSetsCommandOutput) => void
  ): void;
  public listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegexMatchSetsCommandOutput) => void),
    cb?: (err: any, data?: ListRegexMatchSetsCommandOutput) => void
  ): Promise<ListRegexMatchSetsCommandOutput> | void {
    const command = new ListRegexMatchSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>
   */
  public listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegexPatternSetsCommandOutput>;
  public listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void
  ): void;
  public listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void
  ): void;
  public listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegexPatternSetsCommandOutput) => void),
    cb?: (err: any, data?: ListRegexPatternSetsCommandOutput) => void
  ): Promise<ListRegexPatternSetsCommandOutput> | void {
    const command = new ListRegexPatternSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>RuleGroup</a> objects.</p>
   */
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): Promise<ListRuleGroupsCommandOutput> | void {
    const command = new ListRuleGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>RuleSummary</a> objects.</p>
   */
  public listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  public listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
   */
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSizeConstraintSetsCommandOutput>;
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    cb: (err: any, data?: ListSizeConstraintSetsCommandOutput) => void
  ): void;
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSizeConstraintSetsCommandOutput) => void
  ): void;
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSizeConstraintSetsCommandOutput) => void),
    cb?: (err: any, data?: ListSizeConstraintSetsCommandOutput) => void
  ): Promise<ListSizeConstraintSetsCommandOutput> | void {
    const command = new ListSizeConstraintSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
   */
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSqlInjectionMatchSetsCommandOutput>;
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    cb: (err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void
  ): void;
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void
  ): void;
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void),
    cb?: (err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void
  ): Promise<ListSqlInjectionMatchSetsCommandOutput> | void {
    const command = new ListSqlInjectionMatchSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
   */
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribedRuleGroupsCommandOutput>;
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    cb: (err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void
  ): void;
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void
  ): void;
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void
  ): Promise<ListSubscribedRuleGroupsCommandOutput> | void {
    const command = new ListSubscribedRuleGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *         <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
   *         <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules.  </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
   */
  public listWebACLs(args: ListWebACLsCommandInput, options?: __HttpHandlerOptions): Promise<ListWebACLsCommandOutput>;
  public listWebACLs(args: ListWebACLsCommandInput, cb: (err: any, data?: ListWebACLsCommandOutput) => void): void;
  public listWebACLs(
    args: ListWebACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebACLsCommandOutput) => void
  ): void;
  public listWebACLs(
    args: ListWebACLsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWebACLsCommandOutput) => void),
    cb?: (err: any, data?: ListWebACLsCommandOutput) => void
  ): Promise<ListWebACLsCommandOutput> | void {
    const command = new ListWebACLsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Returns an array of <a>XssMatchSet</a> objects.</p>
   */
  public listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListXssMatchSetsCommandOutput>;
  public listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    cb: (err: any, data?: ListXssMatchSetsCommandOutput) => void
  ): void;
  public listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListXssMatchSetsCommandOutput) => void
  ): void;
  public listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListXssMatchSetsCommandOutput) => void),
    cb?: (err: any, data?: ListXssMatchSetsCommandOutput) => void
  ): Promise<ListXssMatchSetsCommandOutput> | void {
    const command = new ListXssMatchSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p>
   * 	        <p>You can access information about all traffic that AWS WAF inspects using the following
   *          steps:</p>
   * 	        <ol>
   *             <li>
   *                <p>Create an Amazon Kinesis Data
   *                Firehose. </p>
   * 	              <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p>
   * 	              <note>
   *                   <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p>
   *             </li>
   *          </ol>
   *
   *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose.  For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
   */
  public putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingConfigurationCommandOutput>;
  public putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void
  ): void;
  public putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void
  ): void;
  public putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutLoggingConfigurationCommandOutput) => void
  ): Promise<PutLoggingConfigurationCommandOutput> | void {
    const command = new PutLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p>
   *          <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
   *             </li>
   *             <li>
   *                <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p>
   *             </li>
   *             <li>
   *
   *                <p>
   *                   <code>Effect</code> must specify <code>Allow</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p>
   *             </li>
   *             <li>
   *                <p>The policy cannot include a <code>Resource</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p>
   *             </li>
   *             <li>
   *                <p>The user making the request must be the owner of the RuleGroup.</p>
   *             </li>
   *             <li>
   *                <p>Your policy must be composed using IAM Policy version 2012-10-17.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
   *
   *          <p>An example of a valid policy parameter is shown in the Examples section below.</p>
   */
  public putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionPolicyCommandOutput>;
  public putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    cb: (err: any, data?: PutPermissionPolicyCommandOutput) => void
  ): void;
  public putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionPolicyCommandOutput) => void
  ): void;
  public putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPermissionPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionPolicyCommandOutput) => void
  ): Promise<PutPermissionPolicyCommandOutput> | void {
    const command = new PutPermissionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *         <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
   *         <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules.  </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p></p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object,
   * 			you specify the following values: </p>
   * 		       <ul>
   *             <li>
   *                <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object,
   * 				you delete the existing object and add a new one.</p>
   *             </li>
   *             <li>
   *                <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p>
   *             </li>
   *             <li>
   *                <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify
   * 				the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p>
   *             </li>
   *             <li>
   *                <p>Where to look, such as at the beginning or the end of a query string.</p>
   *             </li>
   *             <li>
   *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
   *             </li>
   *          </ul>
   * 		       <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain
   * 			the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p>
   * 		       <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateByteMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect
   * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateByteMatchSetCommandOutput>;
  public updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    cb: (err: any, data?: UpdateByteMatchSetCommandOutput) => void
  ): void;
  public updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateByteMatchSetCommandOutput) => void
  ): void;
  public updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateByteMatchSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateByteMatchSetCommandOutput) => void
  ): Promise<UpdateByteMatchSetCommandOutput> | void {
    const command = new UpdateByteMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object,
   * 			you specify the following values: </p>
   * 		       <ul>
   *             <li>
   *                       <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p>
   *                   </li>
   *             <li>
   * 				           <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p>
   * 				        </li>
   *             <li>
   *                <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Submit a <a>CreateGeoMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateGeoMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete.
   * 			If you want to change a country, you delete the existing country and add the new one.</p>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGeoMatchSetCommandOutput>;
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    cb: (err: any, data?: UpdateGeoMatchSetCommandOutput) => void
  ): void;
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGeoMatchSetCommandOutput) => void
  ): void;
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGeoMatchSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateGeoMatchSetCommandOutput) => void
  ): Promise<UpdateGeoMatchSetCommandOutput> | void {
    const command = new UpdateGeoMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an
   *          <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following
   *          values: </p>
   *          <ul>
   *             <li>
   *                <p>Whether to insert or delete the object from the array. If you want to change an
   *                   <code>IPSetDescriptor</code> object, you delete the existing object and add a new
   *                one.</p>
   *             </li>
   *             <li>
   *                <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p>
   *             </li>
   *             <li>
   *                <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for
   *                the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or
   *                   <code>192.0.2.44/32</code> (for the individual IP address
   *                <code>192.0.2.44</code>). </p>
   *             </li>
   *          </ul>
   *          <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS
   *          WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more
   *          information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *             Inter-Domain Routing</a>.</p>
   *          <p>IPv6 addresses can be represented using any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p>
   *             </li>
   *             <li>
   *                <p>1111:0:0:0:0:0:0:0111/128</p>
   *             </li>
   *             <li>
   *                <p>1111::0111/128</p>
   *             </li>
   *             <li>
   *                <p>1111::111/128</p>
   *             </li>
   *          </ul>
   *          <p>You use an <code>IPSet</code> to specify which web requests you want to allow or
   *          block based on the IP addresses that the requests originated from. For example, if you're
   *          receiving a lot of requests from one or a small number of IP addresses and you want to
   *          block the requests, you can create an <code>IPSet</code> that specifies those IP addresses,
   *          and then configure AWS WAF to block the requests. </p>
   *          <p>To create and configure an <code>IPSet</code>, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Submit a <a>CreateIPSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
   *                in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a>
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you
   *                want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   *          <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to
   *          add and/or the IP addresses that you want to delete. If you want to change an IP address,
   *          you delete the existing IP address and add the new one.</p>
   *          <p>You can insert a maximum of 1000 addresses in a single
   *          request.</p>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP
   *          requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF
   *             Developer Guide</a>.</p>
   */
  public updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
  public updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
  public updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;
  public updateIPSet(
    args: UpdateIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIPSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): Promise<UpdateIPSetCommandOutput> | void {
    const command = new UpdateIPSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the
   *             <code>RateLimit</code> in the rule. </p>
   *          <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests
   *          that you want to block or count. The <code>RateLimit</code> specifies the number of
   *          requests every five minutes that triggers the rule.</p>
   *          <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must
   *          match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked.
   *          For example, suppose you add the following to a <code>RateBasedRule</code>:</p>
   *          <ul>
   *             <li>
   *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the
   *                   <code>User-Agent</code> header</p>
   *             </li>
   *          </ul>
   *          <p>Further, you specify a
   *             <code>RateLimit</code> of 1,000.</p>
   *          <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that
   *          you want to block requests that satisfy the rule. For a request to be blocked, it must come
   *          from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header
   *          in the request must contain the value <code>BadBot</code>. Further, requests that match
   *          these two conditions much be received at a rate of more than 1,000 every five minutes. If
   *          the rate drops below this limit, AWS WAF no longer blocks the requests.</p>
   *
   * 		       <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a
   *             <code>RateBasedRule</code>:</p>
   *
   *
   *          <ul>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A <code>TargetString</code> of <code>login</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
   *          <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
   */
  public updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRateBasedRuleCommandOutput>;
  public updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    cb: (err: any, data?: UpdateRateBasedRuleCommandOutput) => void
  ): void;
  public updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRateBasedRuleCommandOutput) => void
  ): void;
  public updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRateBasedRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRateBasedRuleCommandOutput) => void
  ): Promise<UpdateRateBasedRuleCommandOutput> | void {
    const command = new UpdateRateBasedRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object,
   * 			you specify the following values: </p>
   * 		       <ul>
   *             <li>
   *                <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object,
   * 				you delete the existing object and add a new one.</p>
   *             </li>
   *             <li>
   *                <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p>
   *             </li>
   *             <li>
   *                <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p>
   *             </li>
   *             <li>
   *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
   *             </li>
   *          </ul>
   * 		       <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers
   *          that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
   * 		       <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateRegexMatchSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect
   * 				(for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegexMatchSetCommandOutput>;
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    cb: (err: any, data?: UpdateRegexMatchSetCommandOutput) => void
  ): void;
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegexMatchSetCommandOutput) => void
  ): void;
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRegexMatchSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateRegexMatchSetCommandOutput) => void
  ): Promise<UpdateRegexMatchSetCommandOutput> | void {
    const command = new UpdateRegexMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object,
   * 			you specify the following values: </p>
   * 		       <ul>
   *             <li>
   * 			            <p>Whether to insert or delete the <code>RegexPatternString</code>.</p>
   *             </li>
   *             <li>
   *                <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p>
   *             </li>
   *          </ul>
   * 		       <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p>
   *                 <ul>
   *             <li>
   * 				           <p>BadBot</p>
   * 				        </li>
   *             <li>
   * 				           <p>BadB0t</p>
   * 				        </li>
   *             <li>
   * 				           <p>B@dBot</p>
   * 				        </li>
   *             <li>
   * 				           <p>B@dB0t</p>
   * 				        </li>
   *          </ul>
   * 		       <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateRegexPatternSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegexPatternSetCommandOutput>;
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void
  ): void;
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void
  ): void;
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRegexPatternSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void
  ): Promise<UpdateRegexPatternSetCommandOutput> | void {
    const command = new UpdateRegexPatternSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each
   *             <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests
   *          that you want to allow, block, or count. If you add more than one predicate to a
   *             <code>Rule</code>, a request must match all of the specifications to be allowed,
   *          blocked, or counted. For example, suppose
   *          that
   *          you add the following to a <code>Rule</code>: </p>
   * 		       <ul>
   *             <li>
   *                <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p>
   *             </li>
   *             <li>
   *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code>
   *                </p>
   *             </li>
   *          </ul>
   * 		       <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>.
   * 			For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>
   * 			         <i>and</i> the request must originate from the IP address 192.0.2.44.</p>
   * 		       <p>To create and configure a <code>Rule</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p>
   *             </li>
   *             <li>
   *                <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateRule</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p>
   *             </li>
   *             <li>
   *                <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p>
   *             </li>
   *          </ol>
   * 		       <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and
   * 			add the new one.</p>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  public updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleCommandOutput) => void
  ): Promise<UpdateRuleCommandOutput> | void {
    const command = new UpdateRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   *          <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p>
   * 	        <p>You can only insert <code>REGULAR</code> rules into a rule group.</p>
   *          <p>You can have a maximum of ten rules per rule group.</p>
   *
   *
   *          <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   *                <a>UpdateRuleGroup</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p>
   *             </li>
   *          </ol>
   *          <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and
   *          add the new one.</p>
   *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): Promise<UpdateRuleGroupCommandOutput> | void {
    const command = new UpdateRuleGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object,
   * 			you specify the following values: </p>
   * 		       <ul>
   *             <li>
   *                <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object,
   * 				you delete the existing object and add a new one.</p>
   *             </li>
   *             <li>
   *                <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the
   * 				<code>User-Agent</code> header.</p>
   *             </li>
   *             <li>
   *                <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length.
   * 				Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes
   * 				of your request to AWS WAF.</p>
   * 				           <p>You can only specify a single type of TextTransformation.</p>
   *             </li>
   *             <li>
   *                <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as
   * 				equals, greater than, less than, and so on.</p>
   *             </li>
   *             <li>
   *                <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p>
   *             </li>
   *          </ul>
   * 		       <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the
   * 			<code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p>
   * 		  	    <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<code>UpdateSizeConstraintSet</code> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect
   * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSizeConstraintSetCommandOutput>;
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    cb: (err: any, data?: UpdateSizeConstraintSetCommandOutput) => void
  ): void;
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSizeConstraintSetCommandOutput) => void
  ): void;
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSizeConstraintSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateSizeConstraintSetCommandOutput) => void
  ): Promise<UpdateSizeConstraintSetCommandOutput> | void {
    const command = new UpdateSizeConstraintSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>.
   * 			For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a
   * 				<code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter,
   * 				the name of the header or parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before
   * 				inspecting the request for snippets of malicious SQL code.</p>
   * 				           <p>You can only specify a single type of  TextTransformation.</p>
   *             </li>
   *          </ul>
   * 		       <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront
   *          requests that
   *          you want to allow, block, or count. For example, if you're receiving
   *          requests that contain snippets of SQL code in the query string and you want to block the
   *          requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings,
   *          and then configure AWS WAF to block the requests. </p>
   * 		       <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateIPSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to
   * 				inspect for snippets of SQL code.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSqlInjectionMatchSetCommandOutput>;
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void
  ): Promise<UpdateSqlInjectionMatchSetCommandOutput> | void {
    const command = new UpdateSqlInjectionMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies
   * 			web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>.
   * 				AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Rules</code> that you want to add
   *                or
   *                delete. If you want to replace one <code>Rule</code> with another, you delete the
   *                existing <code>Rule</code> and add the new one.</p>
   *             </li>
   *             <li>
   *                <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match
   * 				the conditions in the <code>Rule</code>.</p>
   *             </li>
   *             <li>
   *                <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a
   *                   <code>WebACL</code>. If you add more than one <code>Rule</code> to a
   *                   <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code>
   *                in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has
   *                the lowest value for <code>Priority</code> is evaluated first.) When a web request
   *                matches all
   *                the
   *                predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a
   *                   <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or
   *                block, and doesn't evaluate the request against the remaining <code>Rules</code> in
   *                the <code>WebACL</code>, if any. </p>
   *             </li>
   *          </ul>
   *
   * 		       <p>To create and configure a <code>WebACL</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create and update the predicates that you want to include in <code>Rules</code>.
   * 				For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>,
   * 				<a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see
   * 				<a>CreateRule</a> and <a>UpdateRule</a>.</p>
   *             </li>
   *             <li>
   *                <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateWebACL</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code>
   *                that you want to include in the <code>WebACL</code>, to specify the default action,
   *                and to associate the <code>WebACL</code> with a CloudFront distribution. </p>
   *                <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group
   *                as your
   *                <code>ActivatedRule</code>
   *                ,
   *                you can exclude specific rules from that rule group.</p>
   *                <p>If you already have a rule group associated with a web ACL and want to submit
   *                an <code>UpdateWebACL</code> request to exclude certain rules from that rule group,
   *                you must first remove the rule group from the web ACL, the re-insert it again,
   *                specifying the excluded rules.
   *                For details,
   *                see
   *                   <a>ActivatedRule$ExcludedRules</a>
   *                .
   *                </p>
   *             </li>
   *          </ol>
   *          <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the  <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. 		</p>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateWebACL(
    args: UpdateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebACLCommandOutput>;
  public updateWebACL(args: UpdateWebACLCommandInput, cb: (err: any, data?: UpdateWebACLCommandOutput) => void): void;
  public updateWebACL(
    args: UpdateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebACLCommandOutput) => void
  ): void;
  public updateWebACL(
    args: UpdateWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWebACLCommandOutput) => void),
    cb?: (err: any, data?: UpdateWebACLCommandOutput) => void
  ): Promise<UpdateWebACLCommandOutput> | void {
    const command = new UpdateWebACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <note>
   *             <p>This is <b>AWS WAF Classic</b> documentation. For
   *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
   *       WAF Classic</a> in the developer guide.</p>
   *             <p>
   *                <b>For the latest version of AWS
   *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
   *          </note>
   * 		       <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>.
   * 			For each <code>XssMatchTuple</code> object, you specify the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>Action</code>: Whether to insert the object into or delete the object from the
   *                array. To change an
   *                <code>XssMatchTuple</code>, you delete the existing object and add a new
   *                one.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter,
   * 				the name of the header or parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before
   * 				inspecting the request for cross-site scripting attacks.</p>
   * 				           <p>You can only specify a single type of TextTransformation.</p>
   *             </li>
   *          </ul>
   * 		       <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests
   *          that
   *          you want to allow, block, or count. For example, if you're receiving
   *          requests that contain cross-site scripting attacks in the request body and you want to
   *          block the requests, you can create an <code>XssMatchSet</code> with the applicable
   *          settings, and then configure AWS WAF to block the requests. </p>
   * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Submit a <a>CreateXssMatchSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
   * 				<a>UpdateIPSet</a> request.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to
   * 				inspect for cross-site scripting attacks.</p>
   *             </li>
   *          </ol>
   * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
   * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   */
  public updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateXssMatchSetCommandOutput>;
  public updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    cb: (err: any, data?: UpdateXssMatchSetCommandOutput) => void
  ): void;
  public updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateXssMatchSetCommandOutput) => void
  ): void;
  public updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateXssMatchSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateXssMatchSetCommandOutput) => void
  ): Promise<UpdateXssMatchSetCommandOutput> | void {
    const command = new UpdateXssMatchSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
