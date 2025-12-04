// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelCapacityReservationRequest, CancelCapacityReservationResult } from "../models/models_0";
import { CancelCapacityReservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelCapacityReservationCommand}.
 */
export interface CancelCapacityReservationCommandInput extends CancelCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link CancelCapacityReservationCommand}.
 */
export interface CancelCapacityReservationCommandOutput extends CancelCapacityReservationResult, __MetadataBearer {}

/**
 * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and
 * 			changes the Capacity Reservation's state to <code>cancelled</code>.</p>
 *          <p>You can cancel a Capacity Reservation that is in the following states:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>assessing</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>active</code> and there is no commitment duration or the commitment
 * 					duration has elapsed. You can't cancel a future-dated Capacity Reservation
 * 					during the commitment duration.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You can't modify or cancel a Capacity Block. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-blocks.html">Capacity Blocks for ML</a>.</p>
 *          </note>
 *          <p>If a future-dated Capacity Reservation enters the <code>delayed</code> state, the
 * 			commitment duration is waived, and you can cancel it as soon as it enters the
 * 				<code>active</code> state.</p>
 *          <p>Instances running in the reserved capacity continue running until you stop them.
 * 			Stopped instances that target the Capacity Reservation can no longer launch. Modify
 * 			these instances to either target a different Capacity Reservation, launch On-Demand
 * 			Instance capacity, or run in any open Capacity Reservation that has matching attributes
 * 			and sufficient capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CancelCapacityReservationRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // CancelCapacityReservationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param CancelCapacityReservationCommandInput - {@link CancelCapacityReservationCommandInput}
 * @returns {@link CancelCapacityReservationCommandOutput}
 * @see {@link CancelCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CancelCapacityReservationCommand extends $Command
  .classBuilder<
    CancelCapacityReservationCommandInput,
    CancelCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CancelCapacityReservation", {})
  .n("EC2Client", "CancelCapacityReservationCommand")
  .sc(CancelCapacityReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCapacityReservationRequest;
      output: CancelCapacityReservationResult;
    };
    sdk: {
      input: CancelCapacityReservationCommandInput;
      output: CancelCapacityReservationCommandOutput;
    };
  };
}
