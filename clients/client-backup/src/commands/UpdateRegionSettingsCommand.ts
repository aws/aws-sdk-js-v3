// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegionSettingsInput } from "../models/models_0";
import { UpdateRegionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRegionSettingsCommand}.
 */
export interface UpdateRegionSettingsCommandInput extends UpdateRegionSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateRegionSettingsCommand}.
 */
export interface UpdateRegionSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the current service opt-in settings for the Region.</p>
 *          <p>Use
 *          the <code>DescribeRegionSettings</code> API to determine the resource types that are
 *          supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateRegionSettingsInput
 *   ResourceTypeOptInPreference: { // ResourceTypeOptInPreference
 *     "<keys>": true || false,
 *   },
 *   ResourceTypeManagementPreference: { // ResourceTypeManagementPreference
 *     "<keys>": true || false,
 *   },
 * };
 * const command = new UpdateRegionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRegionSettingsCommandInput - {@link UpdateRegionSettingsCommandInput}
 * @returns {@link UpdateRegionSettingsCommandOutput}
 * @see {@link UpdateRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class UpdateRegionSettingsCommand extends command<UpdateRegionSettingsCommandInput, UpdateRegionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegionSettings",
  UpdateRegionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegionSettingsInput;
      output: {};
    };
    sdk: {
      input: UpdateRegionSettingsCommandInput;
      output: UpdateRegionSettingsCommandOutput;
    };
  };
}
