// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRulesInput, DescribeRulesOutput } from "../models/models_0";
import { de_DescribeRulesCommand, se_DescribeRulesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRulesCommand}.
 */
export interface DescribeRulesCommandInput extends DescribeRulesInput {}
/**
 * @public
 *
 * The output of {@link DescribeRulesCommand}.
 */
export interface DescribeRulesCommandOutput extends DescribeRulesOutput, __MetadataBearer {}

/**
 * <p>Describes the specified rules or the rules for the specified listener. You must specify
 *       either a listener or one or more rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeRulesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeRulesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeRulesInput
 *   ListenerArn: "STRING_VALUE",
 *   RuleArns: [ // RuleArns
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRulesOutput
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
 * //           },
 * //           PathPatternConfig: { // PathPatternConditionConfig
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           HttpHeaderConfig: { // HttpHeaderConditionConfig
 * //             HttpHeaderName: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
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
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           SourceIpConfig: { // SourceIpConditionConfig
 * //             Values: "<ListOfString>",
 * //           },
 * //         },
 * //       ],
 * //       Actions: [ // Actions
 * //         { // Action
 * //           Type: "forward" || "authenticate-oidc" || "authenticate-cognito" || "redirect" || "fixed-response", // required
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
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRulesCommandInput - {@link DescribeRulesCommandInput}
 * @returns {@link DescribeRulesCommandOutput}
 * @see {@link DescribeRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link RuleNotFoundException} (client fault)
 *  <p>The specified rule does not exist.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example To describe a rule
 * ```javascript
 * // This example describes the specified rule.
 * const input = {
 *   "RuleArns": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
 *   ]
 * };
 * const command = new DescribeRulesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Rules": [
 *     {
 *       "Actions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "Conditions": [
 *         {
 *           "Field": "path-pattern",
 *           "Values": [
 *             "/img/*"
 *           ]
 *         }
 *       ],
 *       "IsDefault": false,
 *       "Priority": "10",
 *       "RuleArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-rules-1
 * ```
 *
 */
export class DescribeRulesCommand extends $Command
  .classBuilder<
    DescribeRulesCommandInput,
    DescribeRulesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DescribeRules", {})
  .n("ElasticLoadBalancingV2Client", "DescribeRulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRulesCommand)
  .de(de_DescribeRulesCommand)
  .build() {}
