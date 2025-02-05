// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFleetsRequest, DeleteFleetsResult } from "../models/models_3";
import { de_DeleteFleetsCommand, se_DeleteFleetsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetsCommand}.
 */
export interface DeleteFleetsCommandInput extends DeleteFleetsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetsCommand}.
 */
export interface DeleteFleetsCommandOutput extends DeleteFleetsResult, __MetadataBearer {}

/**
 * <p>Deletes the specified EC2 Fleets.</p>
 *          <p>After you delete an EC2 Fleet, it launches no new instances.</p>
 *          <p>You must also specify whether a deleted EC2 Fleet should terminate its instances. If you
 *          choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code>
 *          state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances
 *          continue to run until they are interrupted or you terminate them manually.</p>
 *          <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is
 *          deleted. Up to 1000 instances can be terminated in a single request to delete
 *             <code>instant</code> fleets. A deleted <code>instant</code> fleet with running instances
 *          is not supported.</p>
 *          <p class="title">
 *             <b>Restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can delete up to 25 fleets of type <code>instant</code> in a single
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>You can delete up to 100 fleets of type <code>maintain</code> or
 *                   <code>request</code> in a single request.</p>
 *             </li>
 *             <li>
 *                <p>You can delete up to 125 fleets in a single request, provided you do not exceed
 *                the quota for each fleet type, as specified above.</p>
 *             </li>
 *             <li>
 *                <p>If you exceed the specified number of fleets to delete, no fleets are
 *                deleted.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Delete an EC2
 *          Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteFleetsRequest
 *   DryRun: true || false,
 *   FleetIds: [ // FleetIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   TerminateInstances: true || false, // required
 * };
 * const command = new DeleteFleetsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetsResult
 * //   SuccessfulFleetDeletions: [ // DeleteFleetSuccessSet
 * //     { // DeleteFleetSuccessItem
 * //       CurrentFleetState: "submitted" || "active" || "deleted" || "failed" || "deleted_running" || "deleted_terminating" || "modifying",
 * //       PreviousFleetState: "submitted" || "active" || "deleted" || "failed" || "deleted_running" || "deleted_terminating" || "modifying",
 * //       FleetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulFleetDeletions: [ // DeleteFleetErrorSet
 * //     { // DeleteFleetErrorItem
 * //       Error: { // DeleteFleetError
 * //         Code: "fleetIdDoesNotExist" || "fleetIdMalformed" || "fleetNotInDeletableState" || "unexpectedError",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       FleetId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFleetsCommandInput - {@link DeleteFleetsCommandInput}
 * @returns {@link DeleteFleetsCommandOutput}
 * @see {@link DeleteFleetsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteFleetsCommand extends $Command
  .classBuilder<
    DeleteFleetsCommandInput,
    DeleteFleetsCommandOutput,
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
  .s("AmazonEC2", "DeleteFleets", {})
  .n("EC2Client", "DeleteFleetsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetsCommand)
  .de(de_DeleteFleetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFleetsRequest;
      output: DeleteFleetsResult;
    };
    sdk: {
      input: DeleteFleetsCommandInput;
      output: DeleteFleetsCommandOutput;
    };
  };
}
