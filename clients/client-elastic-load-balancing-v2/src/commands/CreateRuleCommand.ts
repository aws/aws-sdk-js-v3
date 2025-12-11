// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRuleInput, CreateRuleOutput } from "../models/models_0";
import { CreateRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleOutput, __MetadataBearer {}

/**
 * <p>Creates a rule for the specified listener. The listener must be associated with an
 *       Application Load Balancer.</p>
 *          <p>Each rule consists of a priority, one or more actions, one or more conditions, and
 *       up to two optional transforms. Rules are evaluated in priority order, from the lowest value
 *       to the highest value. When the conditions for a rule are met, its actions are performed.
 *       If the conditions for no rules are met, the actions for the default rule are performed.
 *       For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateRuleInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Conditions: [ // RuleConditionList // required
 *     { // RuleCondition
 *       Field: "STRING_VALUE",
 *       Values: [ // ListOfString
 *         "STRING_VALUE",
 *       ],
 *       HostHeaderConfig: { // HostHeaderConditionConfig
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *         RegexValues: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       PathPatternConfig: { // PathPatternConditionConfig
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *         RegexValues: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       HttpHeaderConfig: { // HttpHeaderConditionConfig
 *         HttpHeaderName: "STRING_VALUE",
 *         Values: "<ListOfString>",
 *         RegexValues: "<ListOfString>",
 *       },
 *       QueryStringConfig: { // QueryStringConditionConfig
 *         Values: [ // QueryStringKeyValuePairList
 *           { // QueryStringKeyValuePair
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       HttpRequestMethodConfig: { // HttpRequestMethodConditionConfig
 *         Values: "<ListOfString>",
 *       },
 *       SourceIpConfig: { // SourceIpConditionConfig
 *         Values: "<ListOfString>",
 *       },
 *       RegexValues: "<ListOfString>",
 *     },
 *   ],
 *   Priority: Number("int"), // required
 *   Actions: [ // Actions // required
 *     { // Action
 *       Type: "forward" || "authenticate-oidc" || "authenticate-cognito" || "redirect" || "fixed-response" || "jwt-validation", // required
 *       TargetGroupArn: "STRING_VALUE",
 *       AuthenticateOidcConfig: { // AuthenticateOidcActionConfig
 *         Issuer: "STRING_VALUE", // required
 *         AuthorizationEndpoint: "STRING_VALUE", // required
 *         TokenEndpoint: "STRING_VALUE", // required
 *         UserInfoEndpoint: "STRING_VALUE", // required
 *         ClientId: "STRING_VALUE", // required
 *         ClientSecret: "STRING_VALUE",
 *         SessionCookieName: "STRING_VALUE",
 *         Scope: "STRING_VALUE",
 *         SessionTimeout: Number("long"),
 *         AuthenticationRequestExtraParams: { // AuthenticateOidcActionAuthenticationRequestExtraParams
 *           "<keys>": "STRING_VALUE",
 *         },
 *         OnUnauthenticatedRequest: "deny" || "allow" || "authenticate",
 *         UseExistingClientSecret: true || false,
 *       },
 *       AuthenticateCognitoConfig: { // AuthenticateCognitoActionConfig
 *         UserPoolArn: "STRING_VALUE", // required
 *         UserPoolClientId: "STRING_VALUE", // required
 *         UserPoolDomain: "STRING_VALUE", // required
 *         SessionCookieName: "STRING_VALUE",
 *         Scope: "STRING_VALUE",
 *         SessionTimeout: Number("long"),
 *         AuthenticationRequestExtraParams: { // AuthenticateCognitoActionAuthenticationRequestExtraParams
 *           "<keys>": "STRING_VALUE",
 *         },
 *         OnUnauthenticatedRequest: "deny" || "allow" || "authenticate",
 *       },
 *       Order: Number("int"),
 *       RedirectConfig: { // RedirectActionConfig
 *         Protocol: "STRING_VALUE",
 *         Port: "STRING_VALUE",
 *         Host: "STRING_VALUE",
 *         Path: "STRING_VALUE",
 *         Query: "STRING_VALUE",
 *         StatusCode: "HTTP_301" || "HTTP_302", // required
 *       },
 *       FixedResponseConfig: { // FixedResponseActionConfig
 *         MessageBody: "STRING_VALUE",
 *         StatusCode: "STRING_VALUE", // required
 *         ContentType: "STRING_VALUE",
 *       },
 *       ForwardConfig: { // ForwardActionConfig
 *         TargetGroups: [ // TargetGroupList
 *           { // TargetGroupTuple
 *             TargetGroupArn: "STRING_VALUE",
 *             Weight: Number("int"),
 *           },
 *         ],
 *         TargetGroupStickinessConfig: { // TargetGroupStickinessConfig
 *           Enabled: true || false,
 *           DurationSeconds: Number("int"),
 *         },
 *       },
 *       JwtValidationConfig: { // JwtValidationActionConfig
 *         JwksEndpoint: "STRING_VALUE", // required
 *         Issuer: "STRING_VALUE", // required
 *         AdditionalClaims: [ // JwtValidationActionAdditionalClaims
 *           { // JwtValidationActionAdditionalClaim
 *             Format: "single-string" || "string-array" || "space-separated-values", // required
 *             Name: "STRING_VALUE", // required
 *             Values: [ // JwtValidationActionAdditionalClaimValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Transforms: [ // RuleTransformList
 *     { // RuleTransform
 *       Type: "host-header-rewrite" || "url-rewrite", // required
 *       HostHeaderRewriteConfig: { // HostHeaderRewriteConfig
 *         Rewrites: [ // RewriteConfigList
 *           { // RewriteConfig
 *             Regex: "STRING_VALUE", // required
 *             Replace: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       UrlRewriteConfig: { // UrlRewriteConfig
 *         Rewrites: [
 *           {
 *             Regex: "STRING_VALUE", // required
 *             Replace: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleOutput
 * //   Rules: [ // Rules
 * //     { // Rule
 * //       RuleArn: "STRING_VALUE",
 * //       Priority: "STRING_VALUE",
 * //       Conditions: [ // RuleConditionList
 * //         { // RuleCondition
 * //           Field: "STRING_VALUE",
 * //           Values: [ // ListOfString
 * //             "STRING_VALUE",
 * //           ],
 * //           HostHeaderConfig: { // HostHeaderConditionConfig
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //             RegexValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           PathPatternConfig: { // PathPatternConditionConfig
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //             RegexValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           HttpHeaderConfig: { // HttpHeaderConditionConfig
 * //             HttpHeaderName: "STRING_VALUE",
 * //             Values: "<ListOfString>",
 * //             RegexValues: "<ListOfString>",
 * //           },
 * //           QueryStringConfig: { // QueryStringConditionConfig
 * //             Values: [ // QueryStringKeyValuePairList
 * //               { // QueryStringKeyValuePair
 * //                 Key: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           HttpRequestMethodConfig: { // HttpRequestMethodConditionConfig
 * //             Values: "<ListOfString>",
 * //           },
 * //           SourceIpConfig: { // SourceIpConditionConfig
 * //             Values: "<ListOfString>",
 * //           },
 * //           RegexValues: "<ListOfString>",
 * //         },
 * //       ],
 * //       Actions: [ // Actions
 * //         { // Action
 * //           Type: "forward" || "authenticate-oidc" || "authenticate-cognito" || "redirect" || "fixed-response" || "jwt-validation", // required
 * //           TargetGroupArn: "STRING_VALUE",
 * //           AuthenticateOidcConfig: { // AuthenticateOidcActionConfig
 * //             Issuer: "STRING_VALUE", // required
 * //             AuthorizationEndpoint: "STRING_VALUE", // required
 * //             TokenEndpoint: "STRING_VALUE", // required
 * //             UserInfoEndpoint: "STRING_VALUE", // required
 * //             ClientId: "STRING_VALUE", // required
 * //             ClientSecret: "STRING_VALUE",
 * //             SessionCookieName: "STRING_VALUE",
 * //             Scope: "STRING_VALUE",
 * //             SessionTimeout: Number("long"),
 * //             AuthenticationRequestExtraParams: { // AuthenticateOidcActionAuthenticationRequestExtraParams
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OnUnauthenticatedRequest: "deny" || "allow" || "authenticate",
 * //             UseExistingClientSecret: true || false,
 * //           },
 * //           AuthenticateCognitoConfig: { // AuthenticateCognitoActionConfig
 * //             UserPoolArn: "STRING_VALUE", // required
 * //             UserPoolClientId: "STRING_VALUE", // required
 * //             UserPoolDomain: "STRING_VALUE", // required
 * //             SessionCookieName: "STRING_VALUE",
 * //             Scope: "STRING_VALUE",
 * //             SessionTimeout: Number("long"),
 * //             AuthenticationRequestExtraParams: { // AuthenticateCognitoActionAuthenticationRequestExtraParams
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OnUnauthenticatedRequest: "deny" || "allow" || "authenticate",
 * //           },
 * //           Order: Number("int"),
 * //           RedirectConfig: { // RedirectActionConfig
 * //             Protocol: "STRING_VALUE",
 * //             Port: "STRING_VALUE",
 * //             Host: "STRING_VALUE",
 * //             Path: "STRING_VALUE",
 * //             Query: "STRING_VALUE",
 * //             StatusCode: "HTTP_301" || "HTTP_302", // required
 * //           },
 * //           FixedResponseConfig: { // FixedResponseActionConfig
 * //             MessageBody: "STRING_VALUE",
 * //             StatusCode: "STRING_VALUE", // required
 * //             ContentType: "STRING_VALUE",
 * //           },
 * //           ForwardConfig: { // ForwardActionConfig
 * //             TargetGroups: [ // TargetGroupList
 * //               { // TargetGroupTuple
 * //                 TargetGroupArn: "STRING_VALUE",
 * //                 Weight: Number("int"),
 * //               },
 * //             ],
 * //             TargetGroupStickinessConfig: { // TargetGroupStickinessConfig
 * //               Enabled: true || false,
 * //               DurationSeconds: Number("int"),
 * //             },
 * //           },
 * //           JwtValidationConfig: { // JwtValidationActionConfig
 * //             JwksEndpoint: "STRING_VALUE", // required
 * //             Issuer: "STRING_VALUE", // required
 * //             AdditionalClaims: [ // JwtValidationActionAdditionalClaims
 * //               { // JwtValidationActionAdditionalClaim
 * //                 Format: "single-string" || "string-array" || "space-separated-values", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 Values: [ // JwtValidationActionAdditionalClaimValues // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //       Transforms: [ // RuleTransformList
 * //         { // RuleTransform
 * //           Type: "host-header-rewrite" || "url-rewrite", // required
 * //           HostHeaderRewriteConfig: { // HostHeaderRewriteConfig
 * //             Rewrites: [ // RewriteConfigList
 * //               { // RewriteConfig
 * //                 Regex: "STRING_VALUE", // required
 * //                 Replace: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           UrlRewriteConfig: { // UrlRewriteConfig
 * //             Rewrites: [
 * //               {
 * //                 Regex: "STRING_VALUE", // required
 * //                 Replace: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link IncompatibleProtocolsException} (client fault)
 *  <p>The specified configuration is not valid with this protocol.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidLoadBalancerActionException} (client fault)
 *  <p>The requested action is not valid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link PriorityInUseException} (client fault)
 *  <p>The specified priority is in use.</p>
 *
 * @throws {@link TargetGroupAssociationLimitException} (client fault)
 *  <p>You've reached the limit on the number of load balancers per target group.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link TooManyActionsException} (client fault)
 *  <p>You've reached the limit on the number of actions per rule.</p>
 *
 * @throws {@link TooManyRegistrationsForTargetIdException} (client fault)
 *  <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 *
 * @throws {@link TooManyRulesException} (client fault)
 *  <p>You've reached the limit on the number of rules per load balancer.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags for this resource.</p>
 *
 * @throws {@link TooManyTargetGroupsException} (client fault)
 *  <p>You've reached the limit on the number of target groups for your Amazon Web Services
 *       account.</p>
 *
 * @throws {@link TooManyTargetsException} (client fault)
 *  <p>You've reached the limit on the number of targets.</p>
 *
 * @throws {@link TooManyUniqueTargetGroupsPerLoadBalancerException} (client fault)
 *  <p>You've reached the limit on the number of unique target groups per load balancer across
 *       all listeners. If a target group is used by multiple actions for a load balancer, it is
 *       counted as only one use.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To create a rule
 * ```javascript
 * // This example creates a rule that forwards requests to the specified target group if the URL contains the specified pattern (for example, /img/*).
 * const input = {
 *   Actions: [
 *     {
 *       TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       Type: "forward"
 *     }
 *   ],
 *   Conditions: [
 *     {
 *       Field: "path-pattern",
 *       Values: [
 *         "/img/*"
 *       ]
 *     }
 *   ],
 *   ListenerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *   Priority: 10
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Rules: [
 *     {
 *       Actions: [
 *         {
 *           TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           Type: "forward"
 *         }
 *       ],
 *       Conditions: [
 *         {
 *           Field: "path-pattern",
 *           Values: [
 *             "/img/*"
 *           ]
 *         }
 *       ],
 *       IsDefault: false,
 *       Priority: "10",
 *       RuleArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuleCommand extends $Command
  .classBuilder<
    CreateRuleCommandInput,
    CreateRuleCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "CreateRule", {})
  .n("ElasticLoadBalancingV2Client", "CreateRuleCommand")
  .sc(CreateRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleInput;
      output: CreateRuleOutput;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
