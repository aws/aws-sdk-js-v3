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
} from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { CreateListenerInput, CreateListenerOutput } from "../models/models_0";
import { de_CreateListenerCommand, se_CreateListenerCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandInput extends CreateListenerInput {}
/**
 * @public
 *
 * The output of {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandOutput extends CreateListenerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
 *       Gateway Load Balancer.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
 *             your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for
 *             your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
 *             Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateListenerInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   Protocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 *   Port: Number("int"),
 *   SslPolicy: "STRING_VALUE",
 *   Certificates: [ // CertificateList
 *     { // Certificate
 *       CertificateArn: "STRING_VALUE",
 *       IsDefault: true || false,
 *     },
 *   ],
 *   DefaultActions: [ // Actions // required
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
 *   AlpnPolicy: [ // AlpnPolicyName
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * // { // CreateListenerOutput
 * //   Listeners: [ // Listeners
 * //     { // Listener
 * //       ListenerArn: "STRING_VALUE",
 * //       LoadBalancerArn: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       Protocol: "HTTP" || "HTTPS" || "TCP" || "TLS" || "UDP" || "TCP_UDP" || "GENEVE",
 * //       Certificates: [ // CertificateList
 * //         { // Certificate
 * //           CertificateArn: "STRING_VALUE",
 * //           IsDefault: true || false,
 * //         },
 * //       ],
 * //       SslPolicy: "STRING_VALUE",
 * //       DefaultActions: [ // Actions
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
 * //       AlpnPolicy: [ // AlpnPolicyName
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateListenerCommandInput - {@link CreateListenerCommandInput}
 * @returns {@link CreateListenerCommandOutput}
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ALPNPolicyNotSupportedException} (client fault)
 *  <p>The specified ALPN policy is not supported.</p>
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified certificate does not exist.</p>
 *
 * @throws {@link DuplicateListenerException} (client fault)
 *  <p>A listener with the specified port already exists.</p>
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
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link SSLPolicyNotFoundException} (client fault)
 *  <p>The specified SSL policy does not exist.</p>
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
 * @throws {@link TooManyCertificatesException} (client fault)
 *  <p>You've reached the limit on the number of certificates per load balancer.</p>
 *
 * @throws {@link TooManyListenersException} (client fault)
 *  <p>You've reached the limit on the number of listeners per load balancer.</p>
 *
 * @throws {@link TooManyRegistrationsForTargetIdException} (client fault)
 *  <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags per load balancer.</p>
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
 * @example To create an HTTP listener
 * ```javascript
 * // This example creates an HTTP listener for the specified load balancer that forwards requests to the specified target group.
 * const input = {
 *   "DefaultActions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "Type": "forward"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "Port": 80,
 *   "Protocol": "HTTP"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-listener-1
 * ```
 *
 * @example To create an HTTPS listener
 * ```javascript
 * // This example creates an HTTPS listener for the specified load balancer that forwards requests to the specified target group. Note that you must specify an SSL certificate for an HTTPS listener. You can create and manage certificates using AWS Certificate Manager (ACM). Alternatively, you can create a certificate using SSL/TLS tools, get the certificate signed by a certificate authority (CA), and upload the certificate to AWS Identity and Access Management (IAM).
 * const input = {
 *   "Certificates": [
 *     {
 *       "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "DefaultActions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       "Type": "forward"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   "Port": 443,
 *   "Protocol": "HTTPS",
 *   "SslPolicy": "ELBSecurityPolicy-2015-05"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "Certificates": [
 *         {
 *           "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *         }
 *       ],
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 443,
 *       "Protocol": "HTTPS",
 *       "SslPolicy": "ELBSecurityPolicy-2015-05"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-listener-2
 * ```
 *
 */
export class CreateListenerCommand extends $Command<
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
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
  constructor(readonly input: CreateListenerCommandInput) {
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
  ): Handler<CreateListenerCommandInput, CreateListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateListenerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateListenerCommandOutput> {
    return de_CreateListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
