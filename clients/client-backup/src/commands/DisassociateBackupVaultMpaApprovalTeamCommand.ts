// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateBackupVaultMpaApprovalTeamInput } from "../models/models_0";
import { DisassociateBackupVaultMpaApprovalTeam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface DisassociateBackupVaultMpaApprovalTeamCommandInput extends DisassociateBackupVaultMpaApprovalTeamInput {}
/**
 * @public
 *
 * The output of {@link DisassociateBackupVaultMpaApprovalTeamCommand}.
 */
export interface DisassociateBackupVaultMpaApprovalTeamCommandOutput extends __MetadataBearer {}

/**
 * Removes the association between an MPA approval team and a backup vault, disabling the MPA approval workflow for restore operations.
 *
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
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
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
export class DisassociateBackupVaultMpaApprovalTeamCommand extends command<DisassociateBackupVaultMpaApprovalTeamCommandInput, DisassociateBackupVaultMpaApprovalTeamCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateBackupVaultMpaApprovalTeam",
  DisassociateBackupVaultMpaApprovalTeam$
) {
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
