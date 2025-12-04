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
import type { DescribeCapacityReservationInput, DescribeCapacityReservationOutput } from "../models/models_0";
import { DescribeCapacityReservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationCommand}.
 */
export interface DescribeCapacityReservationCommandInput extends DescribeCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationCommand}.
 */
export interface DescribeCapacityReservationCommandOutput extends DescribeCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Describes the capacity reservation status for the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeCapacityReservationCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeCapacityReservationCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeCapacityReservationInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityReservationOutput
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   DecreaseRequestsRemaining: Number("int"),
 * //   MinimumLoadBalancerCapacity: { // MinimumLoadBalancerCapacity
 * //     CapacityUnits: Number("int"),
 * //   },
 * //   CapacityReservationState: [ // ZonalCapacityReservationStates
 * //     { // ZonalCapacityReservationState
 * //       State: { // CapacityReservationStatus
 * //         Code: "provisioned" || "pending" || "rebalancing" || "failed",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //       AvailabilityZone: "STRING_VALUE",
 * //       EffectiveCapacityUnits: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCapacityReservationCommandInput - {@link DescribeCapacityReservationCommandInput}
 * @returns {@link DescribeCapacityReservationCommandOutput}
 * @see {@link DescribeCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityReservationCommand extends $Command
  .classBuilder<
    DescribeCapacityReservationCommandInput,
    DescribeCapacityReservationCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DescribeCapacityReservation", {})
  .n("ElasticLoadBalancingV2Client", "DescribeCapacityReservationCommand")
  .sc(DescribeCapacityReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityReservationInput;
      output: DescribeCapacityReservationOutput;
    };
    sdk: {
      input: DescribeCapacityReservationCommandInput;
      output: DescribeCapacityReservationCommandOutput;
    };
  };
}
