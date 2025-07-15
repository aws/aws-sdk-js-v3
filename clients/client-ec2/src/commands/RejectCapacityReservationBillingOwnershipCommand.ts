// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RejectCapacityReservationBillingOwnershipRequest,
  RejectCapacityReservationBillingOwnershipResult,
} from "../models/models_8";
import {
  de_RejectCapacityReservationBillingOwnershipCommand,
  se_RejectCapacityReservationBillingOwnershipCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectCapacityReservationBillingOwnershipCommand}.
 */
export interface RejectCapacityReservationBillingOwnershipCommandInput
  extends RejectCapacityReservationBillingOwnershipRequest {}
/**
 * @public
 *
 * The output of {@link RejectCapacityReservationBillingOwnershipCommand}.
 */
export interface RejectCapacityReservationBillingOwnershipCommandOutput
  extends RejectCapacityReservationBillingOwnershipResult,
    __MetadataBearer {}

/**
 * <p>Rejects a request to assign billing of the available capacity of a shared Capacity
 * 			Reservation to your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/assign-billing.html"> Billing assignment for shared
 * 					Amazon EC2 Capacity Reservations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectCapacityReservationBillingOwnershipCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectCapacityReservationBillingOwnershipCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectCapacityReservationBillingOwnershipRequest
 *   DryRun: true || false,
 *   CapacityReservationId: "STRING_VALUE", // required
 * };
 * const command = new RejectCapacityReservationBillingOwnershipCommand(input);
 * const response = await client.send(command);
 * // { // RejectCapacityReservationBillingOwnershipResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param RejectCapacityReservationBillingOwnershipCommandInput - {@link RejectCapacityReservationBillingOwnershipCommandInput}
 * @returns {@link RejectCapacityReservationBillingOwnershipCommandOutput}
 * @see {@link RejectCapacityReservationBillingOwnershipCommandInput} for command's `input` shape.
 * @see {@link RejectCapacityReservationBillingOwnershipCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectCapacityReservationBillingOwnershipCommand extends $Command
  .classBuilder<
    RejectCapacityReservationBillingOwnershipCommandInput,
    RejectCapacityReservationBillingOwnershipCommandOutput,
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
  .s("AmazonEC2", "RejectCapacityReservationBillingOwnership", {})
  .n("EC2Client", "RejectCapacityReservationBillingOwnershipCommand")
  .f(void 0, void 0)
  .ser(se_RejectCapacityReservationBillingOwnershipCommand)
  .de(de_RejectCapacityReservationBillingOwnershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectCapacityReservationBillingOwnershipRequest;
      output: RejectCapacityReservationBillingOwnershipResult;
    };
    sdk: {
      input: RejectCapacityReservationBillingOwnershipCommandInput;
      output: RejectCapacityReservationBillingOwnershipCommandOutput;
    };
  };
}
