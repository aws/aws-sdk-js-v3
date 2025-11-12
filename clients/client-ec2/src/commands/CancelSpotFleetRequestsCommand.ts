// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSpotFleetRequestsRequest, CancelSpotFleetRequestsResponse } from "../models/models_0";
import { CancelSpotFleetRequests } from "../schemas/schemas_0";

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
 *          <important>
 *             <p>
 *                <b>Terminating an instance is permanent and irreversible.</b>
 *             </p>
 *             <p>After you terminate an instance, you can no longer connect to it, and it can't be recovered.
 *           All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently
 *           deleted and can't be recovered. All data stored on instance store volumes is permanently lost.
 *           For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-ec2-instance-termination-works.html">
 *              How instance termination works</a>.</p>
 *             <p>Before you terminate an instance, ensure that you have backed up all data that you need to
 *              retain after the termination to persistent storage.</p>
 *          </important>
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * @example To cancel a Spot fleet request
 * ```javascript
 * // This example cancels the specified Spot fleet request and terminates its associated Spot Instances.
 * const input = {
 *   SpotFleetRequestIds: [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   TerminateInstances: true
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfulFleetRequests: [
 *     {
 *       CurrentSpotFleetRequestState: "cancelled_running",
 *       PreviousSpotFleetRequestState: "active",
 *       SpotFleetRequestId: "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To cancel a Spot fleet request without terminating its Spot Instances
 * ```javascript
 * // This example cancels the specified Spot fleet request without terminating its associated Spot Instances.
 * const input = {
 *   SpotFleetRequestIds: [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   TerminateInstances: false
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfulFleetRequests: [
 *     {
 *       CurrentSpotFleetRequestState: "cancelled_terminating",
 *       PreviousSpotFleetRequestState: "active",
 *       SpotFleetRequestId: "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelSpotFleetRequestsCommand extends $Command
  .classBuilder<
    CancelSpotFleetRequestsCommandInput,
    CancelSpotFleetRequestsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CancelSpotFleetRequests", {})
  .n("EC2Client", "CancelSpotFleetRequestsCommand")
  .sc(CancelSpotFleetRequests)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSpotFleetRequestsRequest;
      output: CancelSpotFleetRequestsResponse;
    };
    sdk: {
      input: CancelSpotFleetRequestsCommandInput;
      output: CancelSpotFleetRequestsCommandOutput;
    };
  };
}
