// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelCapacityReservationFleetsRequest, CancelCapacityReservationFleetsResult } from "../models/models_0";
import {
  de_CancelCapacityReservationFleetsCommand,
  se_CancelCapacityReservationFleetsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelCapacityReservationFleetsCommand}.
 */
export interface CancelCapacityReservationFleetsCommandInput extends CancelCapacityReservationFleetsRequest {}
/**
 * @public
 *
 * The output of {@link CancelCapacityReservationFleetsCommand}.
 */
export interface CancelCapacityReservationFleetsCommandOutput
  extends CancelCapacityReservationFleetsResult,
    __MetadataBearer {}

/**
 * <p>Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity
 * 			Reservation Fleet, the following happens:</p>
 *          <ul>
 *             <li>
 *                <p>The Capacity Reservation Fleet's status changes to
 * 					<code>cancelled</code>.</p>
 *             </li>
 *             <li>
 *                <p>The individual Capacity Reservations in the Fleet are cancelled. Instances
 * 					running in the Capacity Reservations at the time of cancelling the Fleet
 * 					continue to run in shared capacity.</p>
 *             </li>
 *             <li>
 *                <p>The Fleet stops creating new Capacity Reservations.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelCapacityReservationFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelCapacityReservationFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // CancelCapacityReservationFleetsRequest
 *   DryRun: true || false,
 *   CapacityReservationFleetIds: [ // CapacityReservationFleetIdSet // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelCapacityReservationFleetsCommand(input);
 * const response = await client.send(command);
 * // { // CancelCapacityReservationFleetsResult
 * //   SuccessfulFleetCancellations: [ // CapacityReservationFleetCancellationStateSet
 * //     { // CapacityReservationFleetCancellationState
 * //       CurrentFleetState: "submitted" || "modifying" || "active" || "partially_fulfilled" || "expiring" || "expired" || "cancelling" || "cancelled" || "failed",
 * //       PreviousFleetState: "submitted" || "modifying" || "active" || "partially_fulfilled" || "expiring" || "expired" || "cancelling" || "cancelled" || "failed",
 * //       CapacityReservationFleetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedFleetCancellations: [ // FailedCapacityReservationFleetCancellationResultSet
 * //     { // FailedCapacityReservationFleetCancellationResult
 * //       CapacityReservationFleetId: "STRING_VALUE",
 * //       CancelCapacityReservationFleetError: { // CancelCapacityReservationFleetError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelCapacityReservationFleetsCommandInput - {@link CancelCapacityReservationFleetsCommandInput}
 * @returns {@link CancelCapacityReservationFleetsCommandOutput}
 * @see {@link CancelCapacityReservationFleetsCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CancelCapacityReservationFleetsCommand extends $Command
  .classBuilder<
    CancelCapacityReservationFleetsCommandInput,
    CancelCapacityReservationFleetsCommandOutput,
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
  .s("AmazonEC2", "CancelCapacityReservationFleets", {})
  .n("EC2Client", "CancelCapacityReservationFleetsCommand")
  .f(void 0, void 0)
  .ser(se_CancelCapacityReservationFleetsCommand)
  .de(de_CancelCapacityReservationFleetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCapacityReservationFleetsRequest;
      output: CancelCapacityReservationFleetsResult;
    };
    sdk: {
      input: CancelCapacityReservationFleetsCommandInput;
      output: CancelCapacityReservationFleetsCommandOutput;
    };
  };
}
