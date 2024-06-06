// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSpotFleetRequestsRequest, CancelSpotFleetRequestsResponse } from "../models/models_0";
import { de_CancelSpotFleetRequestsCommand, se_CancelSpotFleetRequestsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSpotFleetRequestsCommand}.
 */
export interface CancelSpotFleetRequestsCommandInput extends CancelSpotFleetRequestsRequest {}
/**
 * @public
 *
 * The output of {@link CancelSpotFleetRequestsCommand}.
 */
export interface CancelSpotFleetRequestsCommandOutput extends CancelSpotFleetRequestsResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified Spot Fleet requests.</p>
 *          <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new instances.</p>
 *          <p>You must also specify whether a canceled Spot Fleet request should terminate its instances. If you
 *             choose to terminate the instances, the Spot Fleet request enters the
 *                 <code>cancelled_terminating</code> state. Otherwise, the Spot Fleet request enters
 *             the <code>cancelled_running</code> state and the instances continue to run until they
 *             are interrupted or you terminate them manually.</p>
 *          <p class="title">
 *             <b>Restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can delete up to 100 fleets in a single request. If you exceed the specified
 *                number, no fleets are deleted.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelSpotFleetRequestsRequest
 *   DryRun: true || false,
 *   SpotFleetRequestIds: [ // SpotFleetRequestIdList // required
 *     "STRING_VALUE",
 *   ],
 *   TerminateInstances: true || false, // required
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * // { // CancelSpotFleetRequestsResponse
 * //   SuccessfulFleetRequests: [ // CancelSpotFleetRequestsSuccessSet
 * //     { // CancelSpotFleetRequestsSuccessItem
 * //       CurrentSpotFleetRequestState: "submitted" || "active" || "cancelled" || "failed" || "cancelled_running" || "cancelled_terminating" || "modifying",
 * //       PreviousSpotFleetRequestState: "submitted" || "active" || "cancelled" || "failed" || "cancelled_running" || "cancelled_terminating" || "modifying",
 * //       SpotFleetRequestId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulFleetRequests: [ // CancelSpotFleetRequestsErrorSet
 * //     { // CancelSpotFleetRequestsErrorItem
 * //       Error: { // CancelSpotFleetRequestsError
 * //         Code: "fleetRequestIdDoesNotExist" || "fleetRequestIdMalformed" || "fleetRequestNotInCancellableState" || "unexpectedError",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       SpotFleetRequestId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelSpotFleetRequestsCommandInput - {@link CancelSpotFleetRequestsCommandInput}
 * @returns {@link CancelSpotFleetRequestsCommandOutput}
 * @see {@link CancelSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To cancel a Spot fleet request
 * ```javascript
 * // This example cancels the specified Spot fleet request and terminates its associated Spot Instances.
 * const input = {
 *   "SpotFleetRequestIds": [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   "TerminateInstances": true
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SuccessfulFleetRequests": [
 *     {
 *       "CurrentSpotFleetRequestState": "cancelled_running",
 *       "PreviousSpotFleetRequestState": "active",
 *       "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-fleet-requests-1
 * ```
 *
 * @example To cancel a Spot fleet request without terminating its Spot Instances
 * ```javascript
 * // This example cancels the specified Spot fleet request without terminating its associated Spot Instances.
 * const input = {
 *   "SpotFleetRequestIds": [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   "TerminateInstances": false
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SuccessfulFleetRequests": [
 *     {
 *       "CurrentSpotFleetRequestState": "cancelled_terminating",
 *       "PreviousSpotFleetRequestState": "active",
 *       "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-fleet-requests-2
 * ```
 *
 */
export class CancelSpotFleetRequestsCommand extends $Command
  .classBuilder<
    CancelSpotFleetRequestsCommandInput,
    CancelSpotFleetRequestsCommandOutput,
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
  .s("AmazonEC2", "CancelSpotFleetRequests", {})
  .n("EC2Client", "CancelSpotFleetRequestsCommand")
  .f(void 0, void 0)
  .ser(se_CancelSpotFleetRequestsCommand)
  .de(de_CancelSpotFleetRequestsCommand)
  .build() {}
