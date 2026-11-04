// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupSelectionInput } from "../models/models_0";
import { DeleteBackupSelection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBackupSelectionCommand}.
 */
export interface DeleteBackupSelectionCommandInput extends DeleteBackupSelectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupSelectionCommand}.
 */
export interface DeleteBackupSelectionCommandOutput extends __MetadataBearer {}

/**
 * Deletes the resource selection associated with a backup plan that is specified by the `SelectionId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupSelectionInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   SelectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupSelectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupSelectionCommandInput - {@link DeleteBackupSelectionCommandInput}
 * @returns {@link DeleteBackupSelectionCommandOutput}
 * @see {@link DeleteBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
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
export class DeleteBackupSelectionCommand extends command<DeleteBackupSelectionCommandInput, DeleteBackupSelectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupSelection",
  DeleteBackupSelection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupSelectionInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupSelectionCommandInput;
      output: DeleteBackupSelectionCommandOutput;
    };
  };
}
