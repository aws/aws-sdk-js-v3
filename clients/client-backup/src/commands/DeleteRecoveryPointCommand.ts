// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecoveryPointInput } from "../models/models_0";
import { DeleteRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecoveryPointCommand}.
 */
export interface DeleteRecoveryPointCommandInput extends DeleteRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link DeleteRecoveryPointCommand}.
 */
export interface DeleteRecoveryPointCommandOutput extends __MetadataBearer {}

/**
 * Deletes the recovery point specified by a recovery point ID.
 *
 * If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup.
 *
 * When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an `EXPIRED` state.
 *
 * `EXPIRED` recovery points can be deleted with this API once the IAM role has the `iam:CreateServiceLinkedRole` action. To learn more about adding this role, see [Troubleshooting manual deletions](https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting).
 *
 * If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an `EXPIRED` state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteRecoveryPointInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecoveryPointCommandInput - {@link DeleteRecoveryPointCommandInput}
 * @returns {@link DeleteRecoveryPointCommandOutput}
 * @see {@link DeleteRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * Backup is already performing an action on this recovery point. It can't perform the action you requested until the first action finishes. Try again later.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class DeleteRecoveryPointCommand extends command<DeleteRecoveryPointCommandInput, DeleteRecoveryPointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecoveryPoint",
  DeleteRecoveryPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecoveryPointInput;
      output: {};
    };
    sdk: {
      input: DeleteRecoveryPointCommandInput;
      output: DeleteRecoveryPointCommandOutput;
    };
  };
}
