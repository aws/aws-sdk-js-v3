// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateListenerInput, CreateListenerOutput } from "../models/models_0";
import { CreateListener } from "../schemas/schemas_9_Listener";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
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
 *   MutualAuthentication: { // MutualAuthenticationAttributes
 *     Mode: "STRING_VALUE",
 *     TrustStoreArn: "STRING_VALUE",
 *     IgnoreClientCertificateExpiry: true || false,
 *     TrustStoreAssociationStatus: "active" || "removed",
 *     AdvertiseTrustStoreCaNames: "on" || "off",
 *   },
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
 * //       MutualAuthentication: { // MutualAuthenticationAttributes
 * //         Mode: "STRING_VALUE",
 * //         TrustStoreArn: "STRING_VALUE",
 * //         IgnoreClientCertificateExpiry: true || false,
 * //         TrustStoreAssociationStatus: "active" || "removed",
 * //         AdvertiseTrustStoreCaNames: "on" || "off",
 * //       },
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
 *  <p>You've reached the limit on the number of tags for this resource.</p>
 *
 * @throws {@link TooManyTargetsException} (client fault)
 *  <p>You've reached the limit on the number of targets.</p>
 *
 * @throws {@link TooManyUniqueTargetGroupsPerLoadBalancerException} (client fault)
 *  <p>You've reached the limit on the number of unique target groups per load balancer across
 *       all listeners. If a target group is used by multiple actions for a load balancer, it is
 *       counted as only one use.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link TrustStoreNotReadyException} (client fault)
 *  <p>The specified trust store is not active.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To create an HTTP listener
 * ```javascript
 * // This example creates an HTTP listener for the specified load balancer that forwards requests to the specified target group.
 * const input = {
 *   DefaultActions: [
 *     {
 *       TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       Type: "forward"
 *     }
 *   ],
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   Port: 80,
 *   Protocol: "HTTP"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Listeners: [
 *     {
 *       DefaultActions: [
 *         {
 *           TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           Type: "forward"
 *         }
 *       ],
 *       ListenerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       Port: 80,
 *       Protocol: "HTTP"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To create an HTTPS listener
 * ```javascript
 * // This example creates an HTTPS listener for the specified load balancer that forwards requests to the specified target group. Note that you must specify an SSL certificate for an HTTPS listener. You can create and manage certificates using AWS Certificate Manager (ACM). Alternatively, you can create a certificate using SSL/TLS tools, get the certificate signed by a certificate authority (CA), and upload the certificate to AWS Identity and Access Management (IAM).
 * const input = {
 *   Certificates: [
 *     {
 *       CertificateArn: "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   DefaultActions: [
 *     {
 *       TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       Type: "forward"
 *     }
 *   ],
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   Port: 443,
 *   Protocol: "HTTPS",
 *   SslPolicy: "ELBSecurityPolicy-2015-05"
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Listeners: [
 *     {
 *       Certificates: [
 *         {
 *           CertificateArn: "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *         }
 *       ],
 *       DefaultActions: [
 *         {
 *           TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           Type: "forward"
 *         }
 *       ],
 *       ListenerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       Port: 443,
 *       Protocol: "HTTPS",
 *       SslPolicy: "ELBSecurityPolicy-2015-05"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateListenerCommand extends $Command
  .classBuilder<
    CreateListenerCommandInput,
    CreateListenerCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "CreateListener", {})
  .n("ElasticLoadBalancingV2Client", "CreateListenerCommand")
  .sc(CreateListener)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListenerInput;
      output: CreateListenerOutput;
    };
    sdk: {
      input: CreateListenerCommandInput;
      output: CreateListenerCommandOutput;
    };
  };
}
