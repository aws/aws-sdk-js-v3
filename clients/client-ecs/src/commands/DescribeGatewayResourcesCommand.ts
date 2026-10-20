// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGatewayResourcesRequest, DescribeGatewayResourcesResponse } from "../models/models_0";
import { DescribeGatewayResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGatewayResourcesCommand}.
 */
export interface DescribeGatewayResourcesCommandInput extends DescribeGatewayResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayResourcesCommand}.
 */
export interface DescribeGatewayResourcesCommandOutput extends DescribeGatewayResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns the infrastructure that a gateway has created and manages, so that you can follow the traffic path from top-level shared resources, such as load balancers, to the service-specific resources represented as gateway routes. Responses include only the Amazon Resource Names (ARNs) of gateway-managed infrastructure. For the current state of a resource, describe it with the corresponding Amazon Web Services service (Elastic Load Balancing, Amazon EC2, or Amazon Web Services Certificate Manager). The results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeGatewayResourcesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeGatewayResourcesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeGatewayResourcesRequest
 *   gateway: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGatewayResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayResourcesResponse
 * //   gatewayResources: { // GatewayResources
 * //     gatewayArn: "STRING_VALUE",
 * //     resources: { // GatewayInfrastructureResources Union: only one key present
 * //       hostSharedAlb: [ // ElbGatewayResourcesList
 * //         { // ElbGatewayResources
 * //           loadBalancerArn: "STRING_VALUE",
 * //           listenerArn: "STRING_VALUE",
 * //           securityGroup: "STRING_VALUE",
 * //           gatewayRouteArns: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGatewayResourcesCommandInput - {@link DescribeGatewayResourcesCommandInput}
 * @returns {@link DescribeGatewayResourcesCommandOutput}
 * @see {@link DescribeGatewayResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayResourcesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link GatewayNotFoundException} (client fault)
 *  <p>The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
 * @example To describe the infrastructure that a gateway manages
 * ```javascript
 * // This example returns the load balancers, listeners, and gateway routes that the gateway named my-gateway manages.
 * const input = {
 *   gateway: "my-gateway"
 * };
 * const command = new DescribeGatewayResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayResources: {
 *     gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *     resources: {
 *       hostSharedAlb: [
 *         {
 *           gatewayRouteArns: [
 *             "arn:aws:ecs:us-east-1:123456789012:gateway-route/my-gateway/a1b2c3d4e5f6478890abcdef12345678/f0e1d2c3b4a5968778695a4b3c2d1e0f"
 *           ],
 *           listenerArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/ecs-gateway-alb-1/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *           loadBalancerArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/ecs-gateway-alb-1/50dc6c495c0c9188",
 *           securityGroup: "sg-0123456789abcdef0"
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeGatewayResourcesCommand extends command<DescribeGatewayResourcesCommandInput, DescribeGatewayResourcesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGatewayResources",
  DescribeGatewayResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayResourcesRequest;
      output: DescribeGatewayResourcesResponse;
    };
    sdk: {
      input: DescribeGatewayResourcesCommandInput;
      output: DescribeGatewayResourcesCommandOutput;
    };
  };
}
