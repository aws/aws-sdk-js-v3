// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelCapacityReservationRequest, CancelCapacityReservationResult } from "../models/models_0";
import { CancelCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *                   <code>scheduled</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>active</code> and there is no commitment duration or the commitment
 * 					duration has elapsed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>active</code> during the commitment duration, if you provide a
 * 					cancellation quote ID and accept the cancellation charges. Use
 * 					<code>CreateCapacityReservationCancellationQuote</code> to generate a quote.
 * 					The Capacity Reservation transitions to <code>cancelling</code> while charges
 * 					are applied.</p>
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
 *   ApplyCancellationCharges: "commitment-wind-down",
 *   QuoteId: "STRING_VALUE",
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
export class CancelCapacityReservationCommand extends command<CancelCapacityReservationCommandInput, CancelCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "CancelCapacityReservation",
  CancelCapacityReservation$
) {
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
