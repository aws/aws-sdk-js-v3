// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateBackupVaultMpaApprovalTeamInput } from "../models/models_0";
import { DisassociateBackupVaultMpaApprovalTeam } from "../schemas/schemas_27_Backup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface DisassociateBackupVaultMpaApprovalTeamCommandInput
  extends DisassociateBackupVaultMpaApprovalTeamInput {}
/**
 * @public
 *
 * The output of {@link DisassociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface DisassociateBackupVaultMpaApprovalTeamCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the association between an MPA approval team and a backup vault, disabling the MPA approval workflow for restore operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateBackupVaultMpaApprovalTeamCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateBackupVaultMpaApprovalTeamCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DisassociateBackupVaultMpaApprovalTeamInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new DisassociateBackupVaultMpaApprovalTeamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateBackupVaultMpaApprovalTeamCommandInput - {@link DisassociateBackupVaultMpaApprovalTeamCommandInput}
 * @returns {@link DisassociateBackupVaultMpaApprovalTeamCommandOutput}
 * @see {@link DisassociateBackupVaultMpaApprovalTeamCommandInput} for command's `input` shape.
 * @see {@link DisassociateBackupVaultMpaApprovalTeamCommandOutput} for command's `response` shape.
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
export class DisassociateBackupVaultMpaApprovalTeamCommand extends $Command
  .classBuilder<
    DisassociateBackupVaultMpaApprovalTeamCommandInput,
    DisassociateBackupVaultMpaApprovalTeamCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DisassociateBackupVaultMpaApprovalTeam", {})
  .n("BackupClient", "DisassociateBackupVaultMpaApprovalTeamCommand")
  .sc(DisassociateBackupVaultMpaApprovalTeam)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateBackupVaultMpaApprovalTeamInput;
      output: {};
    };
    sdk: {
      input: DisassociateBackupVaultMpaApprovalTeamCommandInput;
      output: DisassociateBackupVaultMpaApprovalTeamCommandOutput;
    };
  };
}
