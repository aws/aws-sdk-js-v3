// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateGlobalSettingsInput } from "../models/models_0";
import { UpdateGlobalSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandInput extends UpdateGlobalSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates whether the Amazon Web Services account is opted in to cross-account backup.
 *          Returns an error if the account is not an Organizations management account. Use the
 *             <code>DescribeGlobalSettings</code> API to determine the current settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateGlobalSettingsInput
 *   GlobalSettings: { // GlobalSettings
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGlobalSettingsCommandInput - {@link UpdateGlobalSettingsCommandInput}
 * @returns {@link UpdateGlobalSettingsCommandOutput}
 * @see {@link UpdateGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class UpdateGlobalSettingsCommand extends $Command
  .classBuilder<
    UpdateGlobalSettingsCommandInput,
    UpdateGlobalSettingsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateGlobalSettings", {})
  .n("BackupClient", "UpdateGlobalSettingsCommand")
  .sc(UpdateGlobalSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlobalSettingsInput;
      output: {};
    };
    sdk: {
      input: UpdateGlobalSettingsCommandInput;
      output: UpdateGlobalSettingsCommandOutput;
    };
  };
}
