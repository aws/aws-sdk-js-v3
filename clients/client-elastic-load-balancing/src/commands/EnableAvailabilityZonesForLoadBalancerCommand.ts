// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AddAvailabilityZonesInput, AddAvailabilityZonesOutput } from "../models/models_0";
import { EnableAvailabilityZonesForLoadBalancer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface EnableAvailabilityZonesForLoadBalancerCommandInput extends AddAvailabilityZonesInput {}
/**
 * @public
 *
 * The output of {@link EnableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface EnableAvailabilityZonesForLoadBalancerCommandOutput
  extends AddAvailabilityZonesOutput,
    __MetadataBearer {}

/**
 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p>
 *         <p>The load balancer evenly distributes requests across all its registered Availability Zones
 *             that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // AddAvailabilityZonesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   AvailabilityZones: [ // AvailabilityZones // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // AddAvailabilityZonesOutput
 * //   AvailabilityZones: [ // AvailabilityZones
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableAvailabilityZonesForLoadBalancerCommandInput - {@link EnableAvailabilityZonesForLoadBalancerCommandInput}
 * @returns {@link EnableAvailabilityZonesForLoadBalancerCommandOutput}
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To enable an Availability Zone for a load balancer
 * ```javascript
 * // This example adds the specified Availability Zone to the specified load balancer.
 * const input = {
 *   AvailabilityZones: [
 *     "us-west-2b"
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new EnableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AvailabilityZones: [
 *     "us-west-2a",
 *     "us-west-2b"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EnableAvailabilityZonesForLoadBalancerCommand extends $Command
  .classBuilder<
    EnableAvailabilityZonesForLoadBalancerCommandInput,
    EnableAvailabilityZonesForLoadBalancerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "EnableAvailabilityZonesForLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "EnableAvailabilityZonesForLoadBalancerCommand")
  .sc(EnableAvailabilityZonesForLoadBalancer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddAvailabilityZonesInput;
      output: AddAvailabilityZonesOutput;
    };
    sdk: {
      input: EnableAvailabilityZonesForLoadBalancerCommandInput;
      output: EnableAvailabilityZonesForLoadBalancerCommandOutput;
    };
  };
}
