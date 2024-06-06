// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutBackupVaultAccessPolicyInput } from "../models/models_0";
import { de_PutBackupVaultAccessPolicyCommand, se_PutBackupVaultAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBackupVaultAccessPolicyCommand}.
 */
export interface PutBackupVaultAccessPolicyCommandInput extends PutBackupVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutBackupVaultAccessPolicyCommand}.
 */
export interface PutBackupVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets a resource-based policy that is used to manage access permissions on the target
 *          backup vault. Requires a backup vault name and an access policy document in JSON
 *          format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // PutBackupVaultAccessPolicyInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE",
 * };
 * const command = new PutBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBackupVaultAccessPolicyCommandInput - {@link PutBackupVaultAccessPolicyCommandInput}
 * @returns {@link PutBackupVaultAccessPolicyCommandOutput}
 * @see {@link PutBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
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
export class PutBackupVaultAccessPolicyCommand extends $Command
  .classBuilder<
    PutBackupVaultAccessPolicyCommandInput,
    PutBackupVaultAccessPolicyCommandOutput,
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
  .s("CryoControllerUserManager", "PutBackupVaultAccessPolicy", {})
  .n("BackupClient", "PutBackupVaultAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutBackupVaultAccessPolicyCommand)
  .de(de_PutBackupVaultAccessPolicyCommand)
  .build() {}
