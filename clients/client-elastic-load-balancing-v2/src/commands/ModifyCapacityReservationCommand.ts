// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyCapacityReservationInput, ModifyCapacityReservationOutput } from "../models/models_0";
import { ModifyCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the capacity reservation of the specified load balancer.
 *
 * When modifying capacity reservation, you must include at least one `MinimumLoadBalancerCapacity` or `ResetCapacityReservation`.
 *
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
 *
 * You've exceeded the daily capacity decrease limit for this reservation.
 *
 * @throws {@link CapacityReservationPendingException} (client fault)
 *
 * There is a pending capacity reservation.
 *
 * @throws {@link CapacityUnitsLimitExceededException} (client fault)
 *
 * You've exceeded the capacity units limit.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *
 * There is insufficient capacity to reserve.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration is not valid.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This operation is not allowed.
 *
 * @throws {@link PriorRequestNotCompleteException} (client fault)
 *
 * This operation is not allowed while a prior request has not been completed.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @public
 */
export class ModifyCapacityReservationCommand extends command<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyCapacityReservation",
  ModifyCapacityReservation$
) {
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
