// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCapacityReservationFleetRequest, ModifyCapacityReservationFleetResult } from "../models/models_7";
import { ModifyCapacityReservationFleet } from "../schemas/schemas_140_Reservation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCapacityReservationFleetCommand}.
 */
export interface ModifyCapacityReservationFleetCommandInput extends ModifyCapacityReservationFleetRequest {}
/**
 * @public
 *
 * The output of {@link ModifyCapacityReservationFleetCommand}.
 */
export interface ModifyCapacityReservationFleetCommandOutput
  extends ModifyCapacityReservationFleetResult,
    __MetadataBearer {}

/**
 * <p>Modifies a Capacity Reservation Fleet.</p>
 *          <p>When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet
 * 			automatically creates new Capacity Reservations, or modifies or cancels existing
 * 			Capacity Reservations in the Fleet to meet the new total target capacity. When you
 * 			modify the end date for the Fleet, the end dates for all of the individual Capacity
 * 			Reservations in the Fleet are updated accordingly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyCapacityReservationFleetRequest
 *   CapacityReservationFleetId: "STRING_VALUE", // required
 *   TotalTargetCapacity: Number("int"),
 *   EndDate: new Date("TIMESTAMP"),
 *   DryRun: true || false,
 *   RemoveEndDate: true || false,
 * };
 * const command = new ModifyCapacityReservationFleetCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCapacityReservationFleetResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyCapacityReservationFleetCommandInput - {@link ModifyCapacityReservationFleetCommandInput}
 * @returns {@link ModifyCapacityReservationFleetCommandOutput}
 * @see {@link ModifyCapacityReservationFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyCapacityReservationFleetCommand extends $Command
  .classBuilder<
    ModifyCapacityReservationFleetCommandInput,
    ModifyCapacityReservationFleetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyCapacityReservationFleet", {})
  .n("EC2Client", "ModifyCapacityReservationFleetCommand")
  .sc(ModifyCapacityReservationFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCapacityReservationFleetRequest;
      output: ModifyCapacityReservationFleetResult;
    };
    sdk: {
      input: ModifyCapacityReservationFleetCommandInput;
      output: ModifyCapacityReservationFleetCommandOutput;
    };
  };
}
