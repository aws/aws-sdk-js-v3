// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateRecoveryPointInput } from "../models/models_0";
import { DisassociateRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateRecoveryPointCommand}.
 */
export interface DisassociateRecoveryPointCommandInput extends DisassociateRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link DisassociateRecoveryPointCommand}.
 */
export interface DisassociateRecoveryPointCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan.
 *
 * Does not support snapshot backup recovery points.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DisassociateRecoveryPointInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateRecoveryPointCommandInput - {@link DisassociateRecoveryPointCommandInput}
 * @returns {@link DisassociateRecoveryPointCommandOutput}
 * @see {@link DisassociateRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DisassociateRecoveryPointCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * Backup is already performing an action on this recovery point. It can't perform the action you requested until the first action finishes. Try again later.
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
export class DisassociateRecoveryPointCommand extends command<DisassociateRecoveryPointCommandInput, DisassociateRecoveryPointCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateRecoveryPoint",
  DisassociateRecoveryPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRecoveryPointInput;
      output: {};
    };
    sdk: {
      input: DisassociateRecoveryPointCommandInput;
      output: DisassociateRecoveryPointCommandOutput;
    };
  };
}
