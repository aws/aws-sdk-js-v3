// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateCapacityReservationBillingOwnerRequest,
  DisassociateCapacityReservationBillingOwnerResult,
} from "../models/models_5";
import {
  de_DisassociateCapacityReservationBillingOwnerCommand,
  se_DisassociateCapacityReservationBillingOwnerCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateCapacityReservationBillingOwnerCommand}.
 */
export interface DisassociateCapacityReservationBillingOwnerCommandInput
  extends DisassociateCapacityReservationBillingOwnerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCapacityReservationBillingOwnerCommand}.
 */
export interface DisassociateCapacityReservationBillingOwnerCommandOutput
  extends DisassociateCapacityReservationBillingOwnerResult,
    __MetadataBearer {}

/**
 * <p>Cancels a pending request to assign billing of the unused capacity of a Capacity
 * 			Reservation to a consumer account, or revokes a request that has already been accepted.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/assign-billing.html">Billing assignment for shared
 * 					Amazon EC2 Capacity Reservations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateCapacityReservationBillingOwnerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateCapacityReservationBillingOwnerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateCapacityReservationBillingOwnerRequest
 *   DryRun: true || false,
 *   CapacityReservationId: "STRING_VALUE", // required
 *   UnusedReservationBillingOwnerId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCapacityReservationBillingOwnerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCapacityReservationBillingOwnerResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisassociateCapacityReservationBillingOwnerCommandInput - {@link DisassociateCapacityReservationBillingOwnerCommandInput}
 * @returns {@link DisassociateCapacityReservationBillingOwnerCommandOutput}
 * @see {@link DisassociateCapacityReservationBillingOwnerCommandInput} for command's `input` shape.
 * @see {@link DisassociateCapacityReservationBillingOwnerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisassociateCapacityReservationBillingOwnerCommand extends $Command
  .classBuilder<
    DisassociateCapacityReservationBillingOwnerCommandInput,
    DisassociateCapacityReservationBillingOwnerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DisassociateCapacityReservationBillingOwner", {})
  .n("EC2Client", "DisassociateCapacityReservationBillingOwnerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateCapacityReservationBillingOwnerCommand)
  .de(de_DisassociateCapacityReservationBillingOwnerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCapacityReservationBillingOwnerRequest;
      output: DisassociateCapacityReservationBillingOwnerResult;
    };
    sdk: {
      input: DisassociateCapacityReservationBillingOwnerCommandInput;
      output: DisassociateCapacityReservationBillingOwnerCommandOutput;
    };
  };
}
