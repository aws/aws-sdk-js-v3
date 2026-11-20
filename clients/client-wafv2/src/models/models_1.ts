// smithy-typescript generated code
import type {
  AnalyticsConfig,
  ApplicationConfig,
  AssociationConfig,
  CaptchaConfig,
  ChallengeConfig,
  CustomResponseBody,
  DataProtectionConfig,
  DefaultAction,
  FirewallManagerRuleGroup,
  MonetizationConfig,
  OnSourceDDoSProtectionConfig,
  Rule,
  RuleGroup,
  VisibilityConfig,
} from "./models_0";

/**
 * @public
 */
export interface GetRuleGroupResponse {
  /**
   * <p></p>
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   * @public
   */
  LockToken?: string | undefined;
}

/**
 * <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, Amazon Web Services Verified Access instance, and Amazon Bedrock AgentCore Gateway.  </p>
 * @public
 */
export interface WebACL {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to
   *          create and list commands. You use this ID to do things like get, update, and delete a
   *             <code>WebACL</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the
   *          resource.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   * @public
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the web ACL that helps with identification. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option. </p>
   *          <p>The data protection that you configure for the web ACL alters the data that's available for any other data collection activity,
   *   including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging. </p>
   * @public
   */
  DataProtectionConfig?: DataProtectionConfig | undefined;

  /**
   * <p>The web ACL capacity units (WCUs) currently being used by this web ACL. </p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>The first set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized after these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   * @public
   */
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[] | undefined;

  /**
   * <p>The last set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized before these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   * @public
   */
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[] | undefined;

  /**
   * <p>Indicates whether this web ACL was created by Firewall Manager and is being managed by Firewall Manager. If true, then only Firewall Manager can
   *           delete the web ACL or any Firewall Manager rule groups in the web ACL.
   *            See also the properties <code>RetrofittedByFirewallManager</code>, <code>PreProcessFirewallManagerRuleGroups</code>, and <code>PostProcessFirewallManagerRuleGroups</code>. </p>
   * @public
   */
  ManagedByFirewallManager?: boolean | undefined;

  /**
   * <p>The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a web ACL is the following: </p>
   *                <p>
   *                   <code>awswaf:<account ID>:webacl:<web ACL name>:</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LabelNamespace?: string | undefined;

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. </p>
   * @public
   */
  CaptchaConfig?: CaptchaConfig | undefined;

  /**
   * <p>Specifies how WAF should handle challenge evaluations for rules that don't have
   * their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. </p>
   * @public
   */
  ChallengeConfig?: ChallengeConfig | undefined;

  /**
   * <p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.</p>
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * <p>Specifies custom configurations for the associations between the web ACL and protected resources.  </p>
   *          <p>Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can
   *     customize this setting for Application Load Balancer, CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 8 KB (8,192 bytes) for Application Load Balancer and 16 KB (16,384 bytes) for the other resource types. </p>
   *          <note>
   *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   *          <p>For AppSync, the limit is fixed at 8 KB (8,192 bytes).</p>
   *          <p>You can also use this to have your CloudFront distributions insert the WAF challenge JavaScript SDK into the HTML responses that they return. For more information, see the <code>ChallengeJavascriptSdkInjection</code> setting. </p>
   * @public
   */
  AssociationConfig?: AssociationConfig | undefined;

  /**
   * <p>Indicates whether this web ACL was created by a customer account and then retrofitted by Firewall Manager. If true, then the web ACL is currently being
   *        managed by a Firewall Manager WAF policy, and only Firewall Manager can manage any Firewall Manager rule groups in the web ACL.
   *            See also the properties <code>ManagedByFirewallManager</code>, <code>PreProcessFirewallManagerRuleGroups</code>, and <code>PostProcessFirewallManagerRuleGroups</code>. </p>
   * @public
   */
  RetrofittedByFirewallManager?: boolean | undefined;

  /**
   * <p>Configures the level of DDoS protection that applies to web ACLs associated with Application Load Balancers.</p>
   * @public
   */
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig | undefined;

  /**
   * <p>Returns a list of <code>ApplicationAttribute</code>s.</p>
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * <p>The monetization configuration for the web ACL. Required when any rule in the web ACL uses the <code>Monetize</code> action. Specifies the payment settlement options and currency mode for AI bot monetization.</p>
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;

  /**
   * <p>The security analytics configuration for the web ACL. For more information, see <a>AnalyticsConfig</a>. </p>
   * @public
   */
  AnalyticsConfig?: AnalyticsConfig | undefined;
}

/**
 * @public
 */
export interface GetWebACLForResourceResponse {
  /**
   * <p>The web ACL that is associated with the resource. If there is no associated resource,
   *          WAF returns a null web ACL.</p>
   * @public
   */
  WebACL?: WebACL | undefined;
}

/**
 * @public
 */
export interface GetWebACLResponse {
  /**
   * <p>The web ACL specification. You can modify the settings in this web ACL and use it to
   *          update this web ACL or create a new one.</p>
   * @public
   */
  WebACL?: WebACL | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   * @public
   */
  LockToken?: string | undefined;

  /**
   * <p>The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group <code>AWSManagedRulesATPRuleSet</code> and the account creation fraud prevention managed rule group <code>AWSManagedRulesACFPRuleSet</code>. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a>
   * in the <i>WAF Developer Guide</i>.</p>
   * @public
   */
  ApplicationIntegrationURL?: string | undefined;
}
