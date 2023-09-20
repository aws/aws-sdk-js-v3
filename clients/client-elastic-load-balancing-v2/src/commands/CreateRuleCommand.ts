// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { CreateRuleInput, CreateRuleOutput } from "../models/models_0";
import { de_CreateRuleCommand, se_CreateRuleCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a rule for the specified listener. The listener must be associated with an
 *       Application Load Balancer.</p>
 *          <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules
 *       are evaluated in priority order, from the lowest value to the highest value. When the
 *       conditions for a rule are met, its actions are performed. If the conditions for no rules are
 *       met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
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
 *       },
 *       PathPatternConfig: { // PathPatternConditionConfig
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       HttpHeaderConfig: { // HttpHeaderConditionConfig
 *         HttpHeaderName: "STRING_VALUE",
 *         Values: [
 *           "STRING_VALUE",
 *         ],
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
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       SourceIpConfig: { // SourceIpConditionConfig
 *         Values: "<ListOfString>",
 *       },
 *     },
 *   ],
 *   Priority: Number("int"), // required
 *   Actions: [ // Actions // required
 *     { // Action
 *       Type: "forward" || "authenticate-oidc" || "authenticate-cognito" || "redirect" || "fixed-response", // required
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
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
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
 *  <p>You've reached the limit on the number of tags per load balancer.</p>
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
 * @example To create a rule
 * ```javascript
 * // This example creates a rule that forwards requests to the specified target group if the URL contains the specified pattern (for example, /img/*).
 * const input = {
 *   "Actions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "Type": "forward"
 *     }
 *   ],
 *   "Conditions": [
 *     {
 *       "Field": "path-pattern",
 *       "Values": [
 *         "/img/*"
 *       ]
 *     }
 *   ],
 *   "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *   "Priority": 10
 * };
 * const command = new CreateRuleCommand(input);
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
 * // example id: elbv2-create-rule-1
 * ```
 *
 */
export class CreateRuleCommand extends $Command<
  CreateRuleCommandInput,
  CreateRuleCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRuleCommandInput, CreateRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "CreateRule",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleCommandOutput> {
    return de_CreateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
