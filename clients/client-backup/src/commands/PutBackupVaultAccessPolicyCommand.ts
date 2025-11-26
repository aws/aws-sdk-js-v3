// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutBackupVaultAccessPolicyInput } from "../models/models_0";
import { PutBackupVaultAccessPolicy } from "../schemas/schemas_0";

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
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "PutBackupVaultAccessPolicy", {})
  .n("BackupClient", "PutBackupVaultAccessPolicyCommand")
  .sc(PutBackupVaultAccessPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBackupVaultAccessPolicyInput;
      output: {};
    };
    sdk: {
      input: PutBackupVaultAccessPolicyCommandInput;
      output: PutBackupVaultAccessPolicyCommandOutput;
    };
  };
}
