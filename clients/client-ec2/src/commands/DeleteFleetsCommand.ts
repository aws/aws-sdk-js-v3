// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFleetsRequest, DeleteFleetsResult } from "../models/models_2";
import { DeleteFleets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified EC2 Fleet request.
 *
 * After you delete an EC2 Fleet request, it launches no new instances.
 *
 * You must also specify whether a deleted EC2 Fleet request should terminate its instances. If you choose to terminate the instances, the EC2 Fleet request enters the `deleted_terminating` state. Otherwise, it enters the `deleted_running` state, and the instances continue to run until they are interrupted or you terminate them manually.
 *
 * A deleted `instant` fleet with running instances is not supported. When you delete an `instant` fleet, Amazon EC2 automatically terminates all its instances. For fleets with more than 1000 instances, the deletion request might fail. If your fleet has more than 1000 instances, first terminate most of the instances manually, leaving 1000 or fewer. Then delete the fleet, and the remaining instances will be terminated automatically.
 *
 * > **Important:**
 * >
 * > **Terminating an instance is permanent and irreversible.**
 * >
 * > After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see [How instance termination works](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-ec2-instance-termination-works.html).
 * >
 * > Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage.
 *
 * **Restrictions**
 *
 * - You can delete up to 25 fleets of type `instant` in a single request.
 * - You can delete up to 100 fleets of type `maintain` or `request` in a single request.
 * - You can delete up to 125 fleets in a single request, provided you do not exceed the quota for each fleet type, as specified above.
 * - If you exceed the specified number of fleets to delete, no fleets are deleted.
 *
 * For more information, see [Delete an EC2 Fleet request and the instances in the fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/delete-fleet.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DeleteFleetsCommand extends command<DeleteFleetsCommandInput, DeleteFleetsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFleets",
  DeleteFleets$
) {
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
