import { WAFV2Client } from "./WAFV2Client";
import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand";
import { CheckCapacityCommandInput, CheckCapacityCommandOutput } from "./commands/CheckCapacityCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import { CreateRegexPatternSetCommandInput, CreateRegexPatternSetCommandOutput } from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import { DeleteLoggingConfigurationCommandInput, DeleteLoggingConfigurationCommandOutput } from "./commands/DeleteLoggingConfigurationCommand";
import { DeleteRegexPatternSetCommandInput, DeleteRegexPatternSetCommandOutput } from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand";
import { DescribeManagedRuleGroupCommandInput, DescribeManagedRuleGroupCommandOutput } from "./commands/DescribeManagedRuleGroupCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import { GetLoggingConfigurationCommandInput, GetLoggingConfigurationCommandOutput } from "./commands/GetLoggingConfigurationCommand";
import { GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput } from "./commands/GetRateBasedStatementManagedKeysCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import { GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput } from "./commands/GetWebACLForResourceCommand";
import { ListAvailableManagedRuleGroupsCommandInput, ListAvailableManagedRuleGroupsCommandOutput } from "./commands/ListAvailableManagedRuleGroupsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import { ListLoggingConfigurationsCommandInput, ListLoggingConfigurationsCommandOutput } from "./commands/ListLoggingConfigurationsCommand";
import { ListRegexPatternSetsCommandInput, ListRegexPatternSetsCommandOutput } from "./commands/ListRegexPatternSetsCommand";
import { ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput } from "./commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import { PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput } from "./commands/PutLoggingConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import { UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput } from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <note>
 *             <p>This is the latest version of the <b>AWS WAF</b> API, released in
 *             November, 2019. The names of the entities that you use to access this API, like
 *             endpoints and namespaces, all have the versioning information added, like "V2" or "v2",
 *             to distinguish from the prior version. We recommend migrating your resources to this
 *             version, because it has a number of significant improvements.</p>
 *             <p>If you used AWS WAF prior to this release, you can't use this AWS WAFV2 API to access
 *             any AWS WAF resources that you created before. You can access your old rules, web ACLs,
 *             and other AWS WAF resources only through the AWS WAF Classic APIs. The AWS WAF Classic
 *             APIs have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your AWS WAF resources to this version, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
 *                Developer Guide</a>. </p>
 *          </note>
 *          <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests
 *          that are forwarded to Amazon CloudFront, an Amazon API Gateway API, or an Application Load
 *          Balancer. AWS WAF also lets you control access to your content. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, API Gateway, CloudFront, or the Application Load Balancer responds to requests
 *          either with the requested content or with an HTTP 403 status code (Forbidden). You also can
 *          configure CloudFront to return a custom error page when a request is blocked.</p>
 *          <p>This API guide is for developers who need detailed information about AWS WAF API
 *          actions, data types, and errors. For detailed information about AWS WAF features and an
 *          overview of how to use AWS WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 *          <p>You can make API calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Service Endpoints for AWS WAF</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB) or an API Gateway stage. </p>
 *             </li>
 *             <li>
 *                <p>For AWS CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *          <p>We currently provide two versions of the AWS WAF API: this API and the prior versions,
 *          the classic AWS WAF APIs. This new API provides the same functionality as the older
 *          versions, with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a Web ACL or rule group with a single API call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or Web ACL API calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits AWS WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
export declare class WAFV2 extends WAFV2Client {
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
     *          <p>For AWS CloudFront, you can associate the Web ACL by providing the <code>Id</code> of the <a>WebACL</a> to the CloudFront API call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
     */
    associateWebACL(args: AssociateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWebACLCommandOutput>;
    associateWebACL(args: AssociateWebACLCommandInput, cb: (err: any, data?: AssociateWebACLCommandOutput) => void): void;
    associateWebACL(args: AssociateWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
     *          You can use this to check the capacity requirements for the rules you want to use in a
     *          <a>RuleGroup</a> or <a>WebACL</a>.
     *          </p>
     *          <p>AWS WAF uses WCUs to calculate and control the operating
     *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
     *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
     *          Simple rules that cost little to run use fewer WCUs than more complex rules
     * 				that use more processing power.
     * 				Rule group capacity is fixed at creation, which helps users plan their
     *          web ACL WCU usage when they use a rule group.
     *          The WCU limit for web ACLs is 1,500.  </p>
     */
    checkCapacity(args: CheckCapacityCommandInput, options?: __HttpHandlerOptions): Promise<CheckCapacityCommandOutput>;
    checkCapacity(args: CheckCapacityCommandInput, cb: (err: any, data?: CheckCapacityCommandOutput) => void): void;
    checkCapacity(args: CheckCapacityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckCapacityCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IPSet that lists those IP addresses. </p>
     */
    createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
    createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
    createIPSet(args: CreateIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Creates a <a>RegexPatternSet</a> per the specifications provided.</p>
     */
    createRegexPatternSet(args: CreateRegexPatternSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateRegexPatternSetCommandOutput>;
    createRegexPatternSet(args: CreateRegexPatternSetCommandInput, cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void): void;
    createRegexPatternSet(args: CreateRegexPatternSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Creates a <a>RuleGroup</a> per the specifications provided. </p>
     *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
     */
    createRuleGroup(args: CreateRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleGroupCommandOutput>;
    createRuleGroup(args: CreateRuleGroupCommandInput, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
    createRuleGroup(args: CreateRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Creates a <a>WebACL</a> per the specifications provided.</p>
     *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer.  </p>
     */
    createWebACL(args: CreateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebACLCommandOutput>;
    createWebACL(args: CreateWebACLCommandInput, cb: (err: any, data?: CreateWebACLCommandOutput) => void): void;
    createWebACL(args: CreateWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Deletes the specified <a>IPSet</a>. </p>
     */
    deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
    deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
    deleteIPSet(args: DeleteIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Deletes the <a>LoggingConfiguration</a> from the specified web
     *          ACL.</p>
     */
    deleteLoggingConfiguration(args: DeleteLoggingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoggingConfigurationCommandOutput>;
    deleteLoggingConfiguration(args: DeleteLoggingConfigurationCommandInput, cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void): void;
    deleteLoggingConfiguration(args: DeleteLoggingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Deletes the specified <a>RegexPatternSet</a>.</p>
     */
    deleteRegexPatternSet(args: DeleteRegexPatternSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRegexPatternSetCommandOutput>;
    deleteRegexPatternSet(args: DeleteRegexPatternSetCommandInput, cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void): void;
    deleteRegexPatternSet(args: DeleteRegexPatternSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Deletes the specified <a>RuleGroup</a>.</p>
     */
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleGroupCommandOutput>;
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Deletes the specified <a>WebACL</a>.</p>
     */
    deleteWebACL(args: DeleteWebACLCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebACLCommandOutput>;
    deleteWebACL(args: DeleteWebACLCommandInput, cb: (err: any, data?: DeleteWebACLCommandOutput) => void): void;
    deleteWebACL(args: DeleteWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
     */
    describeManagedRuleGroup(args: DescribeManagedRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeManagedRuleGroupCommandOutput>;
    describeManagedRuleGroup(args: DescribeManagedRuleGroupCommandInput, cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void): void;
    describeManagedRuleGroup(args: DescribeManagedRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Disassociates a Web ACL from a regional application resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
     *          <p>For AWS CloudFront, you can disassociate the Web ACL by providing an empty <code>WebACLId</code> in the CloudFront API call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
     */
    disassociateWebACL(args: DisassociateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWebACLCommandOutput>;
    disassociateWebACL(args: DisassociateWebACLCommandInput, cb: (err: any, data?: DisassociateWebACLCommandOutput) => void): void;
    disassociateWebACL(args: DisassociateWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the specified <a>IPSet</a>.</p>
     */
    getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
    getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
    getIPSet(args: GetIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
     */
    getLoggingConfiguration(args: GetLoggingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetLoggingConfigurationCommandOutput>;
    getLoggingConfiguration(args: GetLoggingConfigurationCommandInput, cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void): void;
    getLoggingConfiguration(args: GetLoggingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
     */
    getRateBasedStatementManagedKeys(args: GetRateBasedStatementManagedKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetRateBasedStatementManagedKeysCommandOutput>;
    getRateBasedStatementManagedKeys(args: GetRateBasedStatementManagedKeysCommandInput, cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void): void;
    getRateBasedStatementManagedKeys(args: GetRateBasedStatementManagedKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the specified <a>RegexPatternSet</a>.</p>
     */
    getRegexPatternSet(args: GetRegexPatternSetCommandInput, options?: __HttpHandlerOptions): Promise<GetRegexPatternSetCommandOutput>;
    getRegexPatternSet(args: GetRegexPatternSetCommandInput, cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void): void;
    getRegexPatternSet(args: GetRegexPatternSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the specified <a>RuleGroup</a>.</p>
     */
    getRuleGroup(args: GetRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleGroupCommandOutput>;
    getRuleGroup(args: GetRuleGroupCommandInput, cb: (err: any, data?: GetRuleGroupCommandOutput) => void): void;
    getRuleGroup(args: GetRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRuleGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
     *          <p>
     *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
     *          (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
     *          returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
     */
    getSampledRequests(args: GetSampledRequestsCommandInput, options?: __HttpHandlerOptions): Promise<GetSampledRequestsCommandOutput>;
    getSampledRequests(args: GetSampledRequestsCommandInput, cb: (err: any, data?: GetSampledRequestsCommandOutput) => void): void;
    getSampledRequests(args: GetSampledRequestsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSampledRequestsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the specified <a>WebACL</a>.</p>
     */
    getWebACL(args: GetWebACLCommandInput, options?: __HttpHandlerOptions): Promise<GetWebACLCommandOutput>;
    getWebACL(args: GetWebACLCommandInput, cb: (err: any, data?: GetWebACLCommandOutput) => void): void;
    getWebACL(args: GetWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
     */
    getWebACLForResource(args: GetWebACLForResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetWebACLForResourceCommandOutput>;
    getWebACLForResource(args: GetWebACLForResourceCommandInput, cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void): void;
    getWebACLForResource(args: GetWebACLForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of managed rule groups that are available for you to use. This list includes all AWS managed rule groups and the AWS Marketplace managed rule groups that you're subscribed to.</p>
     */
    listAvailableManagedRuleGroups(args: ListAvailableManagedRuleGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListAvailableManagedRuleGroupsCommandOutput>;
    listAvailableManagedRuleGroups(args: ListAvailableManagedRuleGroupsCommandInput, cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void): void;
    listAvailableManagedRuleGroups(args: ListAvailableManagedRuleGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.</p>
     */
    listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
    listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
    listIPSets(args: ListIPSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
     */
    listLoggingConfigurations(args: ListLoggingConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLoggingConfigurationsCommandOutput>;
    listLoggingConfigurations(args: ListLoggingConfigurationsCommandInput, cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void): void;
    listLoggingConfigurations(args: ListLoggingConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.</p>
     */
    listRegexPatternSets(args: ListRegexPatternSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegexPatternSetsCommandOutput>;
    listRegexPatternSets(args: ListRegexPatternSetsCommandInput, cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void): void;
    listRegexPatternSets(args: ListRegexPatternSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
     */
    listResourcesForWebACL(args: ListResourcesForWebACLCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesForWebACLCommandOutput>;
    listResourcesForWebACL(args: ListResourcesForWebACLCommandInput, cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void): void;
    listResourcesForWebACL(args: ListResourcesForWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. </p>
     */
    listRuleGroups(args: ListRuleGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListRuleGroupsCommandOutput>;
    listRuleGroups(args: ListRuleGroupsCommandInput, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
    listRuleGroups(args: ListRuleGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *         <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.</p>
     */
    listWebACLs(args: ListWebACLsCommandInput, options?: __HttpHandlerOptions): Promise<ListWebACLsCommandOutput>;
    listWebACLs(args: ListWebACLsCommandInput, cb: (err: any, data?: ListWebACLsCommandOutput) => void): void;
    listWebACLs(args: ListWebACLsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWebACLsCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided.</p>
     *          <p>You can access information about all traffic that AWS WAF inspects using the following
     *          steps:</p>
     *          <ol>
     *             <li>
     *                <p>Create an Amazon Kinesis Data
     *             Firehose. </p>
     *                <p>Create the data firehose with a PUT source and in the region that you are operating. If you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p>
     *                <note>
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
    putLoggingConfiguration(args: PutLoggingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutLoggingConfigurationCommandOutput>;
    putLoggingConfiguration(args: PutLoggingConfigurationCommandInput, cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void): void;
    putLoggingConfiguration(args: PutLoggingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *         <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *         <p>Disassociates tags from an AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Updates the specified <a>IPSet</a>.</p>
     */
    updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
    updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
    updateIPSet(args: UpdateIPSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Updates the specified <a>RegexPatternSet</a>.</p>
     */
    updateRegexPatternSet(args: UpdateRegexPatternSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRegexPatternSetCommandOutput>;
    updateRegexPatternSet(args: UpdateRegexPatternSetCommandInput, cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void): void;
    updateRegexPatternSet(args: UpdateRegexPatternSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Updates the specified <a>RuleGroup</a>.</p>
     *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
     */
    updateRuleGroup(args: UpdateRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleGroupCommandOutput>;
    updateRuleGroup(args: UpdateRuleGroupCommandInput, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
    updateRuleGroup(args: UpdateRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
     *          </note>
     *          <p>Updates the specified <a>WebACL</a>.</p>
     *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer.  </p>
     */
    updateWebACL(args: UpdateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWebACLCommandOutput>;
    updateWebACL(args: UpdateWebACLCommandInput, cb: (err: any, data?: UpdateWebACLCommandOutput) => void): void;
    updateWebACL(args: UpdateWebACLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWebACLCommandOutput) => void): void;
}
