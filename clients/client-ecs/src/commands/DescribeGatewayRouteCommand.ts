// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGatewayRouteRequest, DescribeGatewayRouteResponse } from "../models/models_0";
import { DescribeGatewayRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGatewayRouteCommand}.
 */
export interface DescribeGatewayRouteCommandInput extends DescribeGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayRouteCommand}.
 */
export interface DescribeGatewayRouteCommandOutput extends DescribeGatewayRouteResponse, __MetadataBearer {}

/**
 * <p>Describes a gateway route, including its status, the service it routes traffic to, and the service-specific infrastructure, such as target groups and listener rules, that the gateway manages for it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeGatewayRouteCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeGatewayRouteCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeGatewayRouteRequest
 *   gatewayRouteArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayRouteResponse
 * //   gatewayRoute: { // GatewayRoute
 * //     gatewayRouteArn: "STRING_VALUE",
 * //     serviceArn: "STRING_VALUE",
 * //     serviceContainerPortName: "STRING_VALUE",
 * //     status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //     serviceUrl: "STRING_VALUE",
 * //     resources: { // GatewayRouteResources Union: only one key present
 * //       hostSharedAlb: [ // GatewayRouteAlbResourcesList
 * //         { // GatewayRouteAlbResources
 * //           acmCertificateArn: "STRING_VALUE",
 * //           loadBalancerArn: "STRING_VALUE",
 * //           listenerArn: "STRING_VALUE",
 * //           listenerRuleArn: "STRING_VALUE",
 * //           testListenerRuleArns: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           loadBalancerSecurityGroups: [ // GatewayRouteLoadBalancerSecurityGroupList
 * //             { // GatewayRouteLoadBalancerSecurityGroup
 * //               arn: "STRING_VALUE",
 * //               ruleArns: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           serviceSecurityGroupArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGatewayRouteCommandInput - {@link DescribeGatewayRouteCommandInput}
 * @returns {@link DescribeGatewayRouteCommandOutput}
 * @see {@link DescribeGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To describe a gateway route
 * ```javascript
 * // This example describes the specified gateway route, including the service URL and the load balancer resources that the gateway manages for the route.
 * const input = {
 *   gatewayRouteArn: "arn:aws:ecs:us-east-1:123456789012:gateway-route/my-gateway/a1b2c3d4e5f6478890abcdef12345678/f0e1d2c3b4a5968778695a4b3c2d1e0f"
 * };
 * const command = new DescribeGatewayRouteCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayRoute: {
 *     gatewayRouteArn: "arn:aws:ecs:us-east-1:123456789012:gateway-route/my-gateway/a1b2c3d4e5f6478890abcdef12345678/f0e1d2c3b4a5968778695a4b3c2d1e0f",
 *     resources: {
 *       hostSharedAlb: [
 *         {
 *           acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-90ab-cdef-1234-567890abcdef",
 *           listenerArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/ecs-gateway-alb-1/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *           listenerRuleArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:listener-rule/app/ecs-gateway-alb-1/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee",
 *           loadBalancerArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/ecs-gateway-alb-1/50dc6c495c0c9188",
 *           loadBalancerSecurityGroups: [
 *             {
 *               arn: "arn:aws:ec2:us-east-1:123456789012:security-group/sg-0123456789abcdef0",
 *               ruleArns: [
 *                 "arn:aws:ec2:us-east-1:123456789012:security-group-rule/sgr-0123456789abcdef0"
 *               ]
 *             }
 *           ],
 *           serviceSecurityGroupArn: "arn:aws:ec2:us-east-1:123456789012:security-group/sg-0fedcba9876543210",
 *           testListenerRuleArns: [
 *             "arn:aws:elasticloadbalancing:us-east-1:123456789012:listener-rule/app/ecs-gateway-alb-1/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cc1d2"
 *           ]
 *         }
 *       ]
 *     },
 *     serviceArn: "arn:aws:ecs:us-east-1:123456789012:service/my-cluster/my-web-service",
 *     serviceContainerPortName: "web",
 *     serviceUrl: "https://my-web-service.example.com",
 *     status: "ACTIVE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeGatewayRouteCommand extends command<DescribeGatewayRouteCommandInput, DescribeGatewayRouteCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGatewayRoute",
  DescribeGatewayRoute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayRouteRequest;
      output: DescribeGatewayRouteResponse;
    };
    sdk: {
      input: DescribeGatewayRouteCommandInput;
      output: DescribeGatewayRouteCommandOutput;
    };
  };
}
