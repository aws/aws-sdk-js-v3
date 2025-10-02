// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0";
import { de_ExportBackupPlanTemplateCommand, se_ExportBackupPlanTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportBackupPlanTemplateCommand}.
 */
export interface ExportBackupPlanTemplateCommandInput extends ExportBackupPlanTemplateInput {}
/**
 * @public
 *
 * The output of {@link ExportBackupPlanTemplateCommand}.
 */
export interface ExportBackupPlanTemplateCommandOutput extends ExportBackupPlanTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ExportBackupPlanTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ExportBackupPlanTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ExportBackupPlanTemplateInput
 *   BackupPlanId: "STRING_VALUE", // required
 * };
 * const command = new ExportBackupPlanTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ExportBackupPlanTemplateOutput
 * //   BackupPlanTemplateJson: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportBackupPlanTemplateCommandInput - {@link ExportBackupPlanTemplateCommandInput}
 * @returns {@link ExportBackupPlanTemplateCommandOutput}
 * @see {@link ExportBackupPlanTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportBackupPlanTemplateCommandOutput} for command's `response` shape.
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
export class ExportBackupPlanTemplateCommand extends $Command
  .classBuilder<
    ExportBackupPlanTemplateCommandInput,
    ExportBackupPlanTemplateCommandOutput,
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
  .s("CryoControllerUserManager", "ExportBackupPlanTemplate", {})
  .n("BackupClient", "ExportBackupPlanTemplateCommand")
  .f(void 0, void 0)
  .ser(se_ExportBackupPlanTemplateCommand)
  .de(de_ExportBackupPlanTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportBackupPlanTemplateInput;
      output: ExportBackupPlanTemplateOutput;
    };
    sdk: {
      input: ExportBackupPlanTemplateCommandInput;
      output: ExportBackupPlanTemplateCommandOutput;
    };
  };
}
