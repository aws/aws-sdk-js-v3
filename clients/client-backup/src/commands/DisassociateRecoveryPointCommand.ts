// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateRecoveryPointInput } from "../models/models_0";
import { de_DisassociateRecoveryPointCommand, se_DisassociateRecoveryPointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified continuous backup recovery point from Backup and
 *          releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the
 *          lifecycle that you specified in your original backup plan.</p>
 *          <p>Does not support snapshot backup recovery points.</p>
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
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
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
export class DisassociateRecoveryPointCommand extends $Command
  .classBuilder<
    DisassociateRecoveryPointCommandInput,
    DisassociateRecoveryPointCommandOutput,
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
  .s("CryoControllerUserManager", "DisassociateRecoveryPoint", {})
  .n("BackupClient", "DisassociateRecoveryPointCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateRecoveryPointCommand)
  .de(de_DisassociateRecoveryPointCommand)
  .build() {
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
