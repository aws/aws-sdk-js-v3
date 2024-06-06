// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/models_6";
import { de_ModifyCapacityReservationCommand, se_ModifyCapacityReservationCommand } from "../protocols/Aws_ec2";

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
 * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You
 * 			cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings,
 * 			platform, Availability Zone, or instance eligibility. If you need to modify any of these
 * 			attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with
 * 			the required attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyCapacityReservationRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 *   EndDate: new Date("TIMESTAMP"),
 *   EndDateType: "unlimited" || "limited",
 *   Accept: true || false,
 *   DryRun: true || false,
 *   AdditionalInfo: "STRING_VALUE",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyCapacityReservation", {})
  .n("EC2Client", "ModifyCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyCapacityReservationCommand)
  .de(de_ModifyCapacityReservationCommand)
  .build() {}
