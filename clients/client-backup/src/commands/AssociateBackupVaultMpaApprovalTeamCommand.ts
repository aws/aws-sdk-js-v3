// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateBackupVaultMpaApprovalTeamInput,
  AssociateBackupVaultMpaApprovalTeamInputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_AssociateBackupVaultMpaApprovalTeamCommand,
  se_AssociateBackupVaultMpaApprovalTeamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface AssociateBackupVaultMpaApprovalTeamCommandInput extends AssociateBackupVaultMpaApprovalTeamInput {}
/**
 * @public
 *
 * The output of {@link AssociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface AssociateBackupVaultMpaApprovalTeamCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an MPA approval team with a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, AssociateBackupVaultMpaApprovalTeamCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, AssociateBackupVaultMpaApprovalTeamCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // AssociateBackupVaultMpaApprovalTeamInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   MpaApprovalTeamArn: "STRING_VALUE", // required
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new AssociateBackupVaultMpaApprovalTeamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateBackupVaultMpaApprovalTeamCommandInput - {@link AssociateBackupVaultMpaApprovalTeamCommandInput}
 * @returns {@link AssociateBackupVaultMpaApprovalTeamCommandOutput}
 * @see {@link AssociateBackupVaultMpaApprovalTeamCommandInput} for command's `input` shape.
 * @see {@link AssociateBackupVaultMpaApprovalTeamCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
export class AssociateBackupVaultMpaApprovalTeamCommand extends $Command
  .classBuilder<
    AssociateBackupVaultMpaApprovalTeamCommandInput,
    AssociateBackupVaultMpaApprovalTeamCommandOutput,
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
  .s("CryoControllerUserManager", "AssociateBackupVaultMpaApprovalTeam", {})
  .n("BackupClient", "AssociateBackupVaultMpaApprovalTeamCommand")
  .f(AssociateBackupVaultMpaApprovalTeamInputFilterSensitiveLog, void 0)
  .ser(se_AssociateBackupVaultMpaApprovalTeamCommand)
  .de(de_AssociateBackupVaultMpaApprovalTeamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateBackupVaultMpaApprovalTeamInput;
      output: {};
    };
    sdk: {
      input: AssociateBackupVaultMpaApprovalTeamCommandInput;
      output: AssociateBackupVaultMpaApprovalTeamCommandOutput;
    };
  };
}
