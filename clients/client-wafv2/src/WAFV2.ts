// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import {
  DeleteFirewallManagerRuleGroupsCommand,
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
} from "./commands/DeleteFirewallManagerRuleGroupsCommand";
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
import {
  GenerateMobileSdkReleaseUrlCommand,
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
} from "./commands/GenerateMobileSdkReleaseUrlCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetManagedRuleSetCommand,
  GetManagedRuleSetCommandInput,
  GetManagedRuleSetCommandOutput,
} from "./commands/GetManagedRuleSetCommand";
import {
  GetMobileSdkReleaseCommand,
  GetMobileSdkReleaseCommandInput,
  GetMobileSdkReleaseCommandOutput,
} from "./commands/GetMobileSdkReleaseCommand";
import {
  GetPermissionPolicyCommand,
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
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
import {
  ListAvailableManagedRuleGroupVersionsCommand,
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupVersionsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  ListManagedRuleSetsCommand,
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
} from "./commands/ListManagedRuleSetsCommand";
import {
  ListMobileSdkReleasesCommand,
  ListMobileSdkReleasesCommandInput,
  ListMobileSdkReleasesCommandOutput,
} from "./commands/ListMobileSdkReleasesCommand";
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
import {
  PutManagedRuleSetVersionsCommand,
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
} from "./commands/PutManagedRuleSetVersionsCommand";
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
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateManagedRuleSetVersionExpiryDateCommand,
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
} from "./commands/UpdateManagedRuleSetVersionExpiryDateCommand";
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
import { WAFV2Client } from "./WAFV2Client";

/**
 * <fullname>WAF</fullname>
 *          <note>
 *             <p>This is the latest version of the <b>WAF</b> API,
 *             released in November, 2019. The names of the entities that you use to access this API,
 *             like endpoints and namespaces, all have the versioning information added, like "V2" or
 *             "v2", to distinguish from the prior version. We recommend migrating your resources to
 *             this version, because it has a number of significant improvements.</p>
 *             <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
 *             WAF resources that you created before. You can access your old rules, web ACLs, and
 *             other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
 *             have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your WAF resources to this version,
 *             see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 *          </note>
 *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
 *          requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync
 *          GraphQL API, or an Amazon Cognito user pool. WAF also lets you control access to your content. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, the Amazon API Gateway REST API, CloudFront distribution, the Application Load Balancer, the AppSync GraphQL
 *          API, or the Amazon Cognito user pool responds to requests either with the requested content or with an HTTP 403 status code
 *          (Forbidden). You also can configure CloudFront to return a custom error page when a request is
 *          blocked.</p>
 *          <p>This API guide is for developers who need detailed information about WAF API actions,
 *          data types, and errors. For detailed information about WAF features and an overview of
 *          how to use WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
 *          Guide</a>.</p>
 *          <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool. </p>
 *             </li>
 *             <li>
 *                <p>For Amazon CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>We currently provide two versions of the WAF API: this API and the prior versions,
 *          the classic WAF APIs. This new API provides the same functionality as the older versions,
 *          with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a web ACL or rule group with a single call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or web ACL calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
export class WAFV2 extends WAFV2Client {
  /**
   * <p>Associates a web ACL with a regional application resource, to protect the resource.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool.  </p>
   *          <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To
   *          associate a web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID
   *          to the Amazon Resource Name (ARN) of the web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
   *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
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
   * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
   *          You can use this to check the capacity requirements for the rules you want to use in a
   *          <a>RuleGroup</a> or <a>WebACL</a>.
   *          </p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
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
   * <p>Creates an <a>IPSet</a>, which you use to identify web requests that
   *          originate from specific IP addresses or ranges of IP addresses. For example, if you're
   *          receiving a lot of requests from a ranges of IP addresses, you can configure WAF to
   *          block them using an IPSet that lists those IP addresses. </p>
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
   * <p>Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request
   *          component for the specified patterns.</p>
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
   * <p>Creates a <a>RuleGroup</a> per the specifications provided. </p>
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
   * <p>Creates a <a>WebACL</a> per the specifications provided.</p>
   *          <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, or an Amazon Cognito user pool.  </p>
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
   * <p>Deletes all rule groups that are managed by Firewall Manager for the specified web ACL. </p>
   *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified
   *             <a>WebACL</a>. </p>
   */
  public deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallManagerRuleGroupsCommandOutput>;
  public deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    cb: (err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void
  ): void;
  public deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void
  ): void;
  public deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void
  ): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> | void {
    const command = new DeleteFirewallManagerRuleGroupsCommand(args);
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
   * <p>Deletes the specified <a>IPSet</a>. </p>
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
   * <p>Deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
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
   * <p>Permanently deletes an IAM policy from the specified rule group.</p>
   *          <p>You must be the owner of the rule group to perform this operation.</p>
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
   * <p>Deletes the specified <a>RegexPatternSet</a>.</p>
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
   * <p>Deletes the specified <a>RuleGroup</a>.</p>
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
   * <p>Deletes the specified <a>WebACL</a>. </p>
   *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified
   *             <a>WebACL</a>. </p>
   *          <note>
   *             <p>Before deleting any web ACL, first disassociate it from all resources.</p>
   *             <ul>
   *                <li>
   *                   <p>To retrieve a list of the resources that are associated with a web ACL, use the
   *                   following calls:</p>
   *                   <ul>
   *                      <li>
   *                         <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p>
   *                      </li>
   *                      <li>
   *                         <p>For Amazon CloudFront distributions, use the CloudFront call
   *                            <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a>.</p>
   *                      </li>
   *                   </ul>
   *                </li>
   *                <li>
   *                   <p>To disassociate a resource from a web ACL, use the following calls:</p>
   *                   <ul>
   *                      <li>
   *                         <p>For regional resources, call <a>DisassociateWebACL</a>.</p>
   *                      </li>
   *                      <li>
   *                         <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call
   *                            <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
   *                      </li>
   *                   </ul>
   *                </li>
   *             </ul>
   *          </note>
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
   * <p>Provides high-level information for a managed rule group, including descriptions of the
   *          rules. </p>
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
   * <p>Disassociates the specified regional application resource from any existing web ACL
   *          association. A resource can have at most one web ACL association. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool.  </p>
   *          <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To
   *          disassociate a web ACL, provide an empty web ACL ID in the CloudFront call
   *             <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
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
   * <p>Generates a presigned download URL for the specified release of the mobile SDK.</p>
   *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
   * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
   */
  public generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMobileSdkReleaseUrlCommandOutput>;
  public generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    cb: (err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void
  ): void;
  public generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void
  ): void;
  public generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void),
    cb?: (err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void
  ): Promise<GenerateMobileSdkReleaseUrlCommandOutput> | void {
    const command = new GenerateMobileSdkReleaseUrlCommand(args);
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
   * <p>Retrieves the specified <a>IPSet</a>.</p>
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
   * <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
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
   * <p>Retrieves the specified managed rule set. </p>
   *          <note>
   *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
   *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
   *          </note>
   */
  public getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedRuleSetCommandOutput>;
  public getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    cb: (err: any, data?: GetManagedRuleSetCommandOutput) => void
  ): void;
  public getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedRuleSetCommandOutput) => void
  ): void;
  public getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetManagedRuleSetCommandOutput) => void),
    cb?: (err: any, data?: GetManagedRuleSetCommandOutput) => void
  ): Promise<GetManagedRuleSetCommandOutput> | void {
    const command = new GetManagedRuleSetCommand(args);
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
   * <p>Retrieves information for the specified mobile SDK release, including release notes and
   *          tags.</p>
   *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
   * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
   */
  public getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMobileSdkReleaseCommandOutput>;
  public getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    cb: (err: any, data?: GetMobileSdkReleaseCommandOutput) => void
  ): void;
  public getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMobileSdkReleaseCommandOutput) => void
  ): void;
  public getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMobileSdkReleaseCommandOutput) => void),
    cb?: (err: any, data?: GetMobileSdkReleaseCommandOutput) => void
  ): Promise<GetMobileSdkReleaseCommandOutput> | void {
    const command = new GetMobileSdkReleaseCommand(args);
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
   * <p>Returns the IAM policy that is attached to the specified rule group.</p>
   *          <p>You must be the owner of the rule group to perform this operation.</p>
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
   * <p>Retrieves the keys that are currently blocked by a rate-based rule instance. The maximum
   *          number of managed keys that can be blocked for a single rate-based rule instance is 10,000.
   *          If more than 10,000 addresses exceed the rate limit, those with the highest rates are
   *          blocked.</p>
   *          <p>For a rate-based rule that you've defined inside a rule group, provide the name of the
   *          rule group reference statement in your request, in addition to the rate-based rule name and
   *          the web ACL name. </p>
   *          <p>WAF monitors web requests and manages keys independently for each unique combination
   *          of web ACL, optional rule group, and rate-based rule. For example, if you define a
   *          rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF
   *          monitors web requests and manages keys for that web ACL, rule group reference statement,
   *          and rate-based rule instance. If you use the same rule group in a second web ACL, WAF
   *          monitors web requests and manages keys for this second usage completely independent of your
   *          first. </p>
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
   * <p>Retrieves the specified <a>RegexPatternSet</a>.</p>
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
   * <p>Retrieves the specified <a>RuleGroup</a>.</p>
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
   * <p>Gets detailed information about a specified number of requests--a sample--that WAF
   *          randomly selects from among the first 5,000 requests that your Amazon Web Services resource received
   *          during a time range that you choose. You can specify a sample size of up to 500 requests,
   *          and you can specify any time range in the previous three hours.</p>
   *          <p>
   *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that
   *          you specified. However, if your resource (such as a CloudFront distribution) received 5,000
   *          requests before the specified time range elapsed, <code>GetSampledRequests</code> returns
   *          an updated time range. This new time range indicates the actual period during which WAF
   *          selected the requests in the sample.</p>
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
   * <p>Retrieves the specified <a>WebACL</a>.</p>
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
   * <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
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
   * <p>Retrieves an array of managed rule groups that are available for you to use. This list
   *          includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're
   *          subscribed to.</p>
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
   * <p>Returns a list of the available versions for the specified managed rule group. </p>
   */
  public listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput>;
  public listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    cb: (err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void
  ): void;
  public listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void
  ): void;
  public listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void
  ): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> | void {
    const command = new ListAvailableManagedRuleGroupVersionsCommand(args);
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
   * <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you
   *          manage.</p>
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
   * <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
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
   * <p>Retrieves the managed rule sets that you own. </p>
   *          <note>
   *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
   *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
   *          </note>
   */
  public listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedRuleSetsCommandOutput>;
  public listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    cb: (err: any, data?: ListManagedRuleSetsCommandOutput) => void
  ): void;
  public listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedRuleSetsCommandOutput) => void
  ): void;
  public listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedRuleSetsCommandOutput) => void),
    cb?: (err: any, data?: ListManagedRuleSetsCommandOutput) => void
  ): Promise<ListManagedRuleSetsCommandOutput> | void {
    const command = new ListManagedRuleSetsCommand(args);
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
   * <p>Retrieves a list of the available releases for the mobile SDK and the specified device
   *          platform. </p>
   *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
   * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
   */
  public listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMobileSdkReleasesCommandOutput>;
  public listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    cb: (err: any, data?: ListMobileSdkReleasesCommandOutput) => void
  ): void;
  public listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMobileSdkReleasesCommandOutput) => void
  ): void;
  public listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMobileSdkReleasesCommandOutput) => void),
    cb?: (err: any, data?: ListMobileSdkReleasesCommandOutput) => void
  ): Promise<ListMobileSdkReleasesCommandOutput> | void {
    const command = new ListMobileSdkReleasesCommand(args);
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
   * <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex
   *          pattern sets that you manage.</p>
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
   * <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that
   *          are associated with the specified web ACL. If you want the list of Amazon CloudFront resources, use
   *          the CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
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
   * <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups
   *          that you manage. </p>
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
   * <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. Tags are
   *          key:value pairs that you can use to categorize and manage your resources, for purposes like
   *          billing. For example, you might set the tag key to "customer" and the value to the customer
   *          name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags
   *          for a resource.</p>
   *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
   *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
   *          console. </p>
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
   * <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you
   *          manage.</p>
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
   * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a
   *          web ACL, according to the configuration provided. </p>
   *          <note>
   *             <p>This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. </p>
   *             <p>To modify an existing logging configuration, do the following: </p>
   *             <ol>
   *                <li>
   *                   <p>Retrieve it by calling <a>GetLoggingConfiguration</a>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>Update its settings as needed</p>
   *                </li>
   *                <li>
   *                   <p>Provide the complete logging configuration specification to this call</p>
   *                </li>
   *             </ol>
   *          </note>
   *          <note>
   *             <p>You can define one logging destination per web ACL.</p>
   *          </note>
   *          <p>You can access information about the traffic that WAF inspects using the following
   *          steps:</p>
   *          <ol>
   *             <li>
   *                <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p>
   *                <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p>
   *                <p>For configuration requirements and pricing information for each destination type, see
   *                  <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a>
   *                  in the <i>WAF Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>Associate your logging destination to your web ACL using a
   *                   <code>PutLoggingConfiguration</code> request.</p>
   *             </li>
   *          </ol>
   *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code>
   *           request, WAF creates an additional role or policy that is required to write
   *               logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group.
   *           For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p>
   *          <p>For additional information about web ACL logging, see
   *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
   *                in the <i>WAF Developer Guide</i>.</p>
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
   * <p>Defines the versions of your managed rule set that you are offering to the customers.
   *          Customers see your offerings as managed rule groups with versioning.</p>
   *          <note>
   *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
   *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
   *          </note>
   *          <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your
   *          managed rule set is the name the customer sees for the corresponding managed rule group.
   *          Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group
   *          specification for each version. For each managed rule set, you must specify a version that
   *          you recommend using. </p>
   *          <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>
   */
  public putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutManagedRuleSetVersionsCommandOutput>;
  public putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    cb: (err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void
  ): void;
  public putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void
  ): void;
  public putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void),
    cb?: (err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void
  ): Promise<PutManagedRuleSetVersionsCommandOutput> | void {
    const command = new PutManagedRuleSetVersionsCommand(args);
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
   * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across
   *          accounts.</p>
   *          <p>You must be the owner of the rule group to perform this operation.</p>
   *          <p>This action is subject to the following restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code>
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the
   *                rule group must exist in the same Region.</p>
   *             </li>
   *             <li>
   *                <p>The user making the request must be the owner of the rule group.</p>
   *             </li>
   *          </ul>
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
   * <p>Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can
   *          use to categorize and manage your resources, for purposes like billing. For example, you
   *          might set the tag key to "customer" and the value to the customer name or ID. You can
   *          specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
   *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
   *          console. </p>
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
   * <p>Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can
   *          associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag
   *          value might be "companyA." You can specify one or more tags to add to each container. You
   *          can add up to 50 tags to each Amazon Web Services resource.</p>
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
   * <p>Updates the specified <a>IPSet</a>. </p>
   *          <note>
   *             <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. </p>
   *             <p>To modify an IP set, do the following: </p>
   *             <ol>
   *                <li>
   *                   <p>Retrieve it by calling <a>GetIPSet</a>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>Update its settings as needed</p>
   *                </li>
   *                <li>
   *                   <p>Provide the complete IP set specification to this call</p>
   *                </li>
   *             </ol>
   *          </note>
   *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
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
   * <p>Updates the expiration information for your managed rule set. Use this to initiate the
   *          expiration of a managed rule group version. After you initiate expiration for a version,
   *          WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p>
   *          <note>
   *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
   *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
   *          </note>
   */
  public updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput>;
  public updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    cb: (err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void
  ): void;
  public updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void
  ): void;
  public updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void),
    cb?: (err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void
  ): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> | void {
    const command = new UpdateManagedRuleSetVersionExpiryDateCommand(args);
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
   * <p>Updates the specified <a>RegexPatternSet</a>.</p>
   *          <note>
   *             <p>This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. </p>
   *             <p>To modify a regex pattern set, do the following: </p>
   *             <ol>
   *                <li>
   *                   <p>Retrieve it by calling <a>GetRegexPatternSet</a>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>Update its settings as needed</p>
   *                </li>
   *                <li>
   *                   <p>Provide the complete regex pattern set specification to this call</p>
   *                </li>
   *             </ol>
   *          </note>
   *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
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
   * <p>Updates the specified <a>RuleGroup</a>.</p>
   *          <note>
   *             <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p>
   *             <p>To modify a rule group, do the following: </p>
   *             <ol>
   *                <li>
   *                   <p>Retrieve it by calling <a>GetRuleGroup</a>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>Update its settings as needed</p>
   *                </li>
   *                <li>
   *                   <p>Provide the complete rule group specification to this call</p>
   *                </li>
   *             </ol>
   *          </note>
   *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
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
   * <p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides
   *          continuous coverage to the resources that you have associated with the web ACL. </p>
   *          <note>
   *             <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p>
   *             <p>To modify a web ACL, do the following: </p>
   *             <ol>
   *                <li>
   *                   <p>Retrieve it by calling <a>GetWebACL</a>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>Update its settings as needed</p>
   *                </li>
   *                <li>
   *                   <p>Provide the complete web ACL specification to this call</p>
   *                </li>
   *             </ol>
   *          </note>
   *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
   *          <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, or an Amazon Cognito user pool.  </p>
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
