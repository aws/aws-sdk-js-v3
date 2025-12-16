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
import type { RemoveAvailabilityZonesInput, RemoveAvailabilityZonesOutput } from "../models/models_0";
import { DisableAvailabilityZonesForLoadBalancer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface DisableAvailabilityZonesForLoadBalancerCommandInput extends RemoveAvailabilityZonesInput {}
/**
 * @public
 *
 * The output of {@link DisableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface DisableAvailabilityZonesForLoadBalancerCommandOutput
  extends RemoveAvailabilityZonesOutput,
    __MetadataBearer {}

/**
 * <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p>
 *         <p>There must be at least one Availability Zone registered with a load balancer at all times.
 *          After an Availability Zone is removed, all instances registered with the load balancer that are in the removed
 *          Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance
 *          the traffic among its remaining Availability Zones.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DisableAvailabilityZonesForLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DisableAvailabilityZonesForLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // RemoveAvailabilityZonesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   AvailabilityZones: [ // AvailabilityZones // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAvailabilityZonesOutput
 * //   AvailabilityZones: [ // AvailabilityZones
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableAvailabilityZonesForLoadBalancerCommandInput - {@link DisableAvailabilityZonesForLoadBalancerCommandInput}
 * @returns {@link DisableAvailabilityZonesForLoadBalancerCommandOutput}
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To disable an Availability Zone for a load balancer
 * ```javascript
 * // This example removes the specified Availability Zone from the set of Availability Zones for the specified load balancer.
 * const input = {
 *   AvailabilityZones: [
 *     "us-west-2a"
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new DisableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AvailabilityZones: [
 *     "us-west-2b"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisableAvailabilityZonesForLoadBalancerCommand extends $Command
  .classBuilder<
    DisableAvailabilityZonesForLoadBalancerCommandInput,
    DisableAvailabilityZonesForLoadBalancerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "DisableAvailabilityZonesForLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "DisableAvailabilityZonesForLoadBalancerCommand")
  .sc(DisableAvailabilityZonesForLoadBalancer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAvailabilityZonesInput;
      output: RemoveAvailabilityZonesOutput;
    };
    sdk: {
      input: DisableAvailabilityZonesForLoadBalancerCommandInput;
      output: DisableAvailabilityZonesForLoadBalancerCommandOutput;
    };
  };
}
