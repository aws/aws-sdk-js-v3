// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackupSelectionInput } from "../models/models_0";
import { de_DeleteBackupSelectionCommand, se_DeleteBackupSelectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the resource selection associated with a backup plan that is specified by the
 *             <code>SelectionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
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
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class DeleteBackupSelectionCommand extends $Command
  .classBuilder<
    DeleteBackupSelectionCommandInput,
    DeleteBackupSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "DeleteBackupSelection", {})
  .n("BackupClient", "DeleteBackupSelectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBackupSelectionCommand)
  .de(de_DeleteBackupSelectionCommand)
  .build() {}
