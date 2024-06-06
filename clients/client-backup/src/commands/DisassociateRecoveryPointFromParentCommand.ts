// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateRecoveryPointFromParentInput } from "../models/models_0";
import {
  de_DisassociateRecoveryPointFromParentCommand,
  se_DisassociateRecoveryPointFromParentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This action to a specific child (nested) recovery point removes the relationship
 *          between the specified recovery point and its parent (composite) recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DisassociateRecoveryPointFromParentCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DisassociateRecoveryPointFromParentCommand } = require("@aws-sdk/client-backup"); // CommonJS import
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
 * @public
 */
export class DisassociateRecoveryPointFromParentCommand extends $Command
  .classBuilder<
    DisassociateRecoveryPointFromParentCommandInput,
    DisassociateRecoveryPointFromParentCommandOutput,
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
  .s("CryoControllerUserManager", "DisassociateRecoveryPointFromParent", {})
  .n("BackupClient", "DisassociateRecoveryPointFromParentCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateRecoveryPointFromParentCommand)
  .de(de_DisassociateRecoveryPointFromParentCommand)
  .build() {}
