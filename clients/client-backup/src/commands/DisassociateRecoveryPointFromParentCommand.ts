// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateRecoveryPointFromParentInput } from "../models/models_0";
import { DisassociateRecoveryPointFromParent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateRecoveryPointFromParentCommand}.
 */
export interface DisassociateRecoveryPointFromParentCommandInput extends DisassociateRecoveryPointFromParentInput {}
/**
 * @public
 *
 * The output of {@link DisassociateRecoveryPointFromParentCommand}.
 */
export interface DisassociateRecoveryPointFromParentCommandOutput extends __MetadataBearer {}

/**
 * This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateRecoveryPointFromParentCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateRecoveryPointFromParentCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DisassociateRecoveryPointFromParentInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateRecoveryPointFromParentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateRecoveryPointFromParentCommandInput - {@link DisassociateRecoveryPointFromParentCommandInput}
 * @returns {@link DisassociateRecoveryPointFromParentCommandOutput}
 * @see {@link DisassociateRecoveryPointFromParentCommandInput} for command's `input` shape.
 * @see {@link DisassociateRecoveryPointFromParentCommandOutput} for command's `response` shape.
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
export class DisassociateRecoveryPointFromParentCommand extends command<DisassociateRecoveryPointFromParentCommandInput, DisassociateRecoveryPointFromParentCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateRecoveryPointFromParent",
  DisassociateRecoveryPointFromParent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRecoveryPointFromParentInput;
      output: {};
    };
    sdk: {
      input: DisassociateRecoveryPointFromParentCommandInput;
      output: DisassociateRecoveryPointFromParentCommandOutput;
    };
  };
}
