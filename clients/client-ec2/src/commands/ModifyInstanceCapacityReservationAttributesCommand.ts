// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyInstanceCapacityReservationAttributesRequest,
  ModifyInstanceCapacityReservationAttributesResult,
} from "../models/models_6";
import {
  de_ModifyInstanceCapacityReservationAttributesCommand,
  se_ModifyInstanceCapacityReservationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceCapacityReservationAttributesCommand}.
 */
export interface ModifyInstanceCapacityReservationAttributesCommandInput
  extends ModifyInstanceCapacityReservationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceCapacityReservationAttributesCommand}.
 */
export interface ModifyInstanceCapacityReservationAttributesCommandOutput
  extends ModifyInstanceCapacityReservationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceCapacityReservationAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   CapacityReservationSpecification: { // CapacityReservationSpecification
 *     CapacityReservationPreference: "open" || "none",
 *     CapacityReservationTarget: { // CapacityReservationTarget
 *       CapacityReservationId: "STRING_VALUE",
 *       CapacityReservationResourceGroupArn: "STRING_VALUE",
 *     },
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceCapacityReservationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceCapacityReservationAttributesResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyInstanceCapacityReservationAttributesCommandInput - {@link ModifyInstanceCapacityReservationAttributesCommandInput}
 * @returns {@link ModifyInstanceCapacityReservationAttributesCommandOutput}
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyInstanceCapacityReservationAttributesCommand extends $Command
  .classBuilder<
    ModifyInstanceCapacityReservationAttributesCommandInput,
    ModifyInstanceCapacityReservationAttributesCommandOutput,
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
  .s("AmazonEC2", "ModifyInstanceCapacityReservationAttributes", {})
  .n("EC2Client", "ModifyInstanceCapacityReservationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceCapacityReservationAttributesCommand)
  .de(de_ModifyInstanceCapacityReservationAttributesCommand)
  .build() {}
