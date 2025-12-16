// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBackupVaultAccessPolicyInput, GetBackupVaultAccessPolicyOutput } from "../models/models_0";
import { GetBackupVaultAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackupVaultAccessPolicyCommand}.
 */
export interface GetBackupVaultAccessPolicyCommandInput extends GetBackupVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetBackupVaultAccessPolicyCommand}.
 */
export interface GetBackupVaultAccessPolicyCommandOutput extends GetBackupVaultAccessPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the access policy document that is associated with the named backup
 *          vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetBackupVaultAccessPolicyInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new GetBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupVaultAccessPolicyOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackupVaultAccessPolicyCommandInput - {@link GetBackupVaultAccessPolicyCommandInput}
 * @returns {@link GetBackupVaultAccessPolicyCommandOutput}
 * @see {@link GetBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
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
export class GetBackupVaultAccessPolicyCommand extends $Command
  .classBuilder<
    GetBackupVaultAccessPolicyCommandInput,
    GetBackupVaultAccessPolicyCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetBackupVaultAccessPolicy", {})
  .n("BackupClient", "GetBackupVaultAccessPolicyCommand")
  .sc(GetBackupVaultAccessPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackupVaultAccessPolicyInput;
      output: GetBackupVaultAccessPolicyOutput;
    };
    sdk: {
      input: GetBackupVaultAccessPolicyCommandInput;
      output: GetBackupVaultAccessPolicyCommandOutput;
    };
  };
}
