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
import { ModifyCapacityReservationInput, ModifyCapacityReservationOutput } from "../models/models_0";
import { ModifyCapacityReservation } from "../schemas/schemas_3_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCapacityReservationCommand}.
 */
export interface ModifyCapacityReservationCommandInput extends ModifyCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link ModifyCapacityReservationCommand}.
 */
export interface ModifyCapacityReservationCommandOutput extends ModifyCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Modifies the capacity reservation of the specified load balancer.</p>
 *          <p>When modifying capacity reservation, you must include at least one <code>MinimumLoadBalancerCapacity</code>
 *       or <code>ResetCapacityReservation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyCapacityReservationCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyCapacityReservationCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyCapacityReservationInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   MinimumLoadBalancerCapacity: { // MinimumLoadBalancerCapacity
 *     CapacityUnits: Number("int"),
 *   },
 *   ResetCapacityReservation: true || false,
 * };
 * const command = new ModifyCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCapacityReservationOutput
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
 * @param ModifyCapacityReservationCommandInput - {@link ModifyCapacityReservationCommandInput}
 * @returns {@link ModifyCapacityReservationCommandOutput}
 * @see {@link ModifyCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CapacityDecreaseRequestsLimitExceededException} (client fault)
 *  <p>You've exceeded the daily capacity decrease limit for this reservation.</p>
 *
 * @throws {@link CapacityReservationPendingException} (client fault)
 *  <p>There is a pending capacity reservation.</p>
 *
 * @throws {@link CapacityUnitsLimitExceededException} (client fault)
 *  <p>You've exceeded the capacity units limit.</p>
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>There is insufficient capacity to reserve.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link PriorRequestNotCompleteException} (client fault)
 *  <p>This operation is not allowed while a prior request has not been completed.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class ModifyCapacityReservationCommand extends $Command
  .classBuilder<
    ModifyCapacityReservationCommandInput,
    ModifyCapacityReservationCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "ModifyCapacityReservation", {})
  .n("ElasticLoadBalancingV2Client", "ModifyCapacityReservationCommand")
  .sc(ModifyCapacityReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCapacityReservationInput;
      output: ModifyCapacityReservationOutput;
    };
    sdk: {
      input: ModifyCapacityReservationCommandInput;
      output: ModifyCapacityReservationCommandOutput;
    };
  };
}
