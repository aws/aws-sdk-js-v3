// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackupVaultAccessPolicyInput } from "../models/models_0";
import {
  de_DeleteBackupVaultAccessPolicyCommand,
  se_DeleteBackupVaultAccessPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultAccessPolicyCommand}.
 */
export interface DeleteBackupVaultAccessPolicyCommandInput extends DeleteBackupVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultAccessPolicyCommand}.
 */
export interface DeleteBackupVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the policy document that manages permissions on a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultAccessPolicyInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultAccessPolicyCommandInput - {@link DeleteBackupVaultAccessPolicyCommandInput}
 * @returns {@link DeleteBackupVaultAccessPolicyCommandOutput}
 * @see {@link DeleteBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteBackupVaultAccessPolicyCommand extends $Command
  .classBuilder<
    DeleteBackupVaultAccessPolicyCommandInput,
    DeleteBackupVaultAccessPolicyCommandOutput,
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
  .s("CryoControllerUserManager", "DeleteBackupVaultAccessPolicy", {})
  .n("BackupClient", "DeleteBackupVaultAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBackupVaultAccessPolicyCommand)
  .de(de_DeleteBackupVaultAccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupVaultAccessPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupVaultAccessPolicyCommandInput;
      output: DeleteBackupVaultAccessPolicyCommandOutput;
    };
  };
}
