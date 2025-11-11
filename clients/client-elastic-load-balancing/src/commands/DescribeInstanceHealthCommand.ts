// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEndPointStateInput, DescribeEndPointStateOutput } from "../models/models_0";
import { DescribeInstanceHealth } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceHealthCommand}.
 */
export interface DescribeInstanceHealthCommandInput extends DescribeEndPointStateInput {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceHealthCommand}.
 */
export interface DescribeInstanceHealthCommandOutput extends DescribeEndPointStateOutput, __MetadataBearer {}

/**
 * <p>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeEndPointStateInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndPointStateOutput
 * //   InstanceStates: [ // InstanceStates
 * //     { // InstanceState
 * //       InstanceId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       ReasonCode: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstanceHealthCommandInput - {@link DescribeInstanceHealthCommandInput}
 * @returns {@link DescribeInstanceHealthCommandOutput}
 * @see {@link DescribeInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidEndPointException} (client fault)
 *  <p>The specified endpoint is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To describe the health of the instances for a load balancer
 * ```javascript
 * // This example describes the health of the instances for the specified load balancer.
 * const input = {
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceStates: [
 *     {
 *       Description: "N/A",
 *       InstanceId: "i-207d9717",
 *       ReasonCode: "N/A",
 *       State: "InService"
 *     },
 *     {
 *       Description: "N/A",
 *       InstanceId: "i-afefb49b",
 *       ReasonCode: "N/A",
 *       State: "InService"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstanceHealthCommand extends $Command
  .classBuilder<
    DescribeInstanceHealthCommandInput,
    DescribeInstanceHealthCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "DescribeInstanceHealth", {})
  .n("ElasticLoadBalancingClient", "DescribeInstanceHealthCommand")
  .sc(DescribeInstanceHealth)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEndPointStateInput;
      output: DescribeEndPointStateOutput;
    };
    sdk: {
      input: DescribeInstanceHealthCommandInput;
      output: DescribeInstanceHealthCommandOutput;
    };
  };
}
