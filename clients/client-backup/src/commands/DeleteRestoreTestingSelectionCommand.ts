// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRestoreTestingSelectionInput } from "../models/models_0";
import {
  de_DeleteRestoreTestingSelectionCommand,
  se_DeleteRestoreTestingSelectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRestoreTestingSelectionCommand}.
 */
export interface DeleteRestoreTestingSelectionCommandInput extends DeleteRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteRestoreTestingSelectionCommand}.
 */
export interface DeleteRestoreTestingSelectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Input the Restore Testing Plan name and Restore Testing Selection
 *          name.</p>
 *          <p>All testing selections associated with a restore testing plan must
 *          be deleted before the restore testing plan can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRestoreTestingSelectionCommandInput - {@link DeleteRestoreTestingSelectionCommandInput}
 * @returns {@link DeleteRestoreTestingSelectionCommandOutput}
 * @see {@link DeleteRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link DeleteRestoreTestingSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
 *
 * @public
 */
export class DeleteRestoreTestingSelectionCommand extends $Command
  .classBuilder<
    DeleteRestoreTestingSelectionCommandInput,
    DeleteRestoreTestingSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "DeleteRestoreTestingSelection", {})
  .n("BackupClient", "DeleteRestoreTestingSelectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRestoreTestingSelectionCommand)
  .de(de_DeleteRestoreTestingSelectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRestoreTestingSelectionInput;
      output: {};
    };
    sdk: {
      input: DeleteRestoreTestingSelectionCommandInput;
      output: DeleteRestoreTestingSelectionCommandOutput;
    };
  };
}
