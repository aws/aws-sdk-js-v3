import { WAFV2Client } from "./WAFV2Client";
import {
  AssociateWebACLCommand,
  AssociateWebACLCommandInput,
  AssociateWebACLCommandOutput,
} from "./commands/AssociateWebACLCommand";
import {
  CheckCapacityCommand,
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput,
} from "./commands/CheckCapacityCommand";
import { CreateIPSetCommand, CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRegexPatternSetCommand,
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import {
  CreateRuleGroupCommand,
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
} from "./commands/CreateRuleGroupCommand";
import {
  CreateWebACLCommand,
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput,
} from "./commands/CreateWebACLCommand";
import { DeleteIPSetCommand, DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeleteRegexPatternSetCommand,
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import {
  DeleteRuleGroupCommand,
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput,
} from "./commands/DeleteRuleGroupCommand";
import {
  DeleteWebACLCommand,
  DeleteWebACLCommandInput,
  DeleteWebACLCommandOutput,
} from "./commands/DeleteWebACLCommand";
import {
  DescribeManagedRuleGroupCommand,
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "./commands/DescribeManagedRuleGroupCommand";
import {
  DisassociateWebACLCommand,
  DisassociateWebACLCommandInput,
  DisassociateWebACLCommandOutput,
} from "./commands/DisassociateWebACLCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetRateBasedStatementManagedKeysCommand,
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
} from "./commands/GetRateBasedStatementManagedKeysCommand";
import {
  GetRegexPatternSetCommand,
  GetRegexPatternSetCommandInput,
  GetRegexPatternSetCommandOutput,
} from "./commands/GetRegexPatternSetCommand";
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
import { GetWebACLCommand, GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommand,
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand";
import {
  ListAvailableManagedRuleGroupsCommand,
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  ListRegexPatternSetsCommand,
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommand,
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommand, ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import {
  PutLoggingConfigurationCommand,
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateRegexPatternSetCommand,
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import {
  UpdateRuleGroupCommand,
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
} from "./commands/UpdateRuleGroupCommand";
import {
  UpdateWebACLCommand,
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
} from "./commands/UpdateWebACLCommand";
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
export class WAFV2 extends WAFV2Client {
  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>For AWS CloudFront, you can associate the Web ACL by providing the <code>Id</code> of the <a>WebACL</a> to the CloudFront API call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
   */
  public associateWebACL(
    args: AssociateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebACLCommandOutput>;
  public associateWebACL(
    args: AssociateWebACLCommandInput,
    cb: (err: any, data?: AssociateWebACLCommandOutput) => void
  ): void;
  public associateWebACL(
    args: AssociateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebACLCommandOutput) => void
  ): void;
  public associateWebACL(
    args: AssociateWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWebACLCommandOutput) => void),
    cb?: (err: any, data?: AssociateWebACLCommandOutput) => void
  ): Promise<AssociateWebACLCommandOutput> | void {
    const command = new AssociateWebACLCommand(args);
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
  public checkCapacity(
    args: CheckCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckCapacityCommandOutput>;
  public checkCapacity(
    args: CheckCapacityCommandInput,
    cb: (err: any, data?: CheckCapacityCommandOutput) => void
  ): void;
  public checkCapacity(
    args: CheckCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckCapacityCommandOutput) => void
  ): void;
  public checkCapacity(
    args: CheckCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckCapacityCommandOutput) => void),
    cb?: (err: any, data?: CheckCapacityCommandOutput) => void
  ): Promise<CheckCapacityCommandOutput> | void {
    const command = new CheckCapacityCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IPSet that lists those IP addresses. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Creates a <a>RegexPatternSet</a> per the specifications provided.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Creates a <a>RuleGroup</a> per the specifications provided. </p>
   *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Creates a <a>WebACL</a> per the specifications provided.</p>
   *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer.  </p>
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
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Deletes the specified <a>IPSet</a>. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Deletes the <a>LoggingConfiguration</a> from the specified web
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Deletes the specified <a>RegexPatternSet</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Deletes the specified <a>RuleGroup</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Deletes the specified <a>WebACL</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
   */
  public describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedRuleGroupCommandOutput>;
  public describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void
  ): void;
  public describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void
  ): void;
  public describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeManagedRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void
  ): Promise<DescribeManagedRuleGroupCommandOutput> | void {
    const command = new DescribeManagedRuleGroupCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Disassociates a Web ACL from a regional application resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>For AWS CloudFront, you can disassociate the Web ACL by providing an empty <code>WebACLId</code> in the CloudFront API call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
   */
  public disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebACLCommandOutput>;
  public disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    cb: (err: any, data?: DisassociateWebACLCommandOutput) => void
  ): void;
  public disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebACLCommandOutput) => void
  ): void;
  public disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateWebACLCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWebACLCommandOutput) => void
  ): Promise<DisassociateWebACLCommandOutput> | void {
    const command = new DisassociateWebACLCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the specified <a>IPSet</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
   */
  public getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput>;
  public getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void
  ): void;
  public getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void
  ): void;
  public getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void),
    cb?: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput> | void {
    const command = new GetRateBasedStatementManagedKeysCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the specified <a>RegexPatternSet</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the specified <a>RuleGroup</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
   *          <p>
   *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
   *          (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
   *          returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the specified <a>WebACL</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
   */
  public getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWebACLForResourceCommandOutput>;
  public getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void
  ): void;
  public getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void
  ): void;
  public getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWebACLForResourceCommandOutput) => void),
    cb?: (err: any, data?: GetWebACLForResourceCommandOutput) => void
  ): Promise<GetWebACLForResourceCommandOutput> | void {
    const command = new GetWebACLForResourceCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of managed rule groups that are available for you to use. This list includes all AWS managed rule groups and the AWS Marketplace managed rule groups that you're subscribed to.</p>
   */
  public listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagedRuleGroupsCommandOutput>;
  public listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void
  ): void;
  public listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void
  ): void;
  public listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void
  ): Promise<ListAvailableManagedRuleGroupsCommandOutput> | void {
    const command = new ListAvailableManagedRuleGroupsCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
   */
  public listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesForWebACLCommandOutput>;
  public listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void
  ): void;
  public listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void
  ): void;
  public listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesForWebACLCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesForWebACLCommandOutput) => void
  ): Promise<ListResourcesForWebACLCommandOutput> | void {
    const command = new ListResourcesForWebACLCommand(args);
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *         <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *         <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *         <p>Disassociates tags from an AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Updates the specified <a>IPSet</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Updates the specified <a>RegexPatternSet</a>.</p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Updates the specified <a>RuleGroup</a>.</p>
   *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
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
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Updates the specified <a>WebACL</a>.</p>
   *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer.  </p>
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
}
