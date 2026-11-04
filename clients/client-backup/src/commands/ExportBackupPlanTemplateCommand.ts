// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0";
import { ExportBackupPlanTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the backup plan that is specified by the plan ID as a backup template.
 *
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
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
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
export class ExportBackupPlanTemplateCommand extends command<ExportBackupPlanTemplateCommandInput, ExportBackupPlanTemplateCommandOutput>(
  _ep0,
  _mw0,
  "ExportBackupPlanTemplate",
  ExportBackupPlanTemplate$
) {
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
