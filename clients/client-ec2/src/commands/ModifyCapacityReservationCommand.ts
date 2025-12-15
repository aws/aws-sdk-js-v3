// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/models_6";
import { ModifyCapacityReservation$ } from "../schemas/schemas_0";

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
export interface ModifyCapacityReservationCommandInput extends ModifyCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyCapacityReservationCommand}.
 */
export interface ModifyCapacityReservationCommandOutput extends ModifyCapacityReservationResult, __MetadataBearer {}

/**
 * <p>Modifies a Capacity Reservation's capacity, instance eligibility, and the conditions
 * 			under which it is to be released. You can't modify a Capacity Reservation's instance
 * 			type, EBS optimization, platform, instance store settings, Availability Zone, or
 * 			tenancy. If you need to modify any of these attributes, we recommend that you cancel the
 * 			Capacity Reservation, and then create a new one with the required attributes. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservations-modify.html"> Modify an active
 * 				Capacity Reservation</a>.</p>
 *          <p>The allowed modifications depend on the state of the Capacity Reservation:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>assessing</code> or <code>scheduled</code> state - You can modify the
 * 					tags only.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pending</code> state - You can't modify the Capacity Reservation in any
 * 					way.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>active</code> state but still within the commitment duration - You can't
 * 					decrease the instance count or set an end date that is within the commitment
 * 					duration. All other modifications are allowed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>active</code> state with no commitment duration or elapsed commitment
 * 					duration - All modifications are allowed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>expired</code>, <code>cancelled</code>, <code>unsupported</code>, or
 * 						<code>failed</code> state - You can't modify the Capacity Reservation in any
 * 					way.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyCapacityReservationRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 *   EndDate: new Date("TIMESTAMP"),
 *   EndDateType: "unlimited" || "limited",
 *   Accept: true || false,
 *   DryRun: true || false,
 *   AdditionalInfo: "STRING_VALUE",
 *   InstanceMatchCriteria: "open" || "targeted",
 * };
 * const command = new ModifyCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCapacityReservationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyCapacityReservationCommandInput - {@link ModifyCapacityReservationCommandInput}
 * @returns {@link ModifyCapacityReservationCommandOutput}
 * @see {@link ModifyCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyCapacityReservationCommand extends $Command
  .classBuilder<
    ModifyCapacityReservationCommandInput,
    ModifyCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyCapacityReservation", {})
  .n("EC2Client", "ModifyCapacityReservationCommand")
  .sc(ModifyCapacityReservation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCapacityReservationRequest;
      output: ModifyCapacityReservationResult;
    };
    sdk: {
      input: ModifyCapacityReservationCommandInput;
      output: ModifyCapacityReservationCommandOutput;
    };
  };
}
