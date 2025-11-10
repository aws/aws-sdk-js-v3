// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AccountSettings, UpdateAccountSettingsRequest } from "../models/models_0";
import { UpdateAccountSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandOutput extends AccountSettings, __MetadataBearer {}

/**
 * <p>Updates the value of the <code>DeletionProtection</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // UpdateAccountSettingsRequest
 *   DeletionProtection: { // DeletionProtectionSettings
 *     Enabled: true || false,
 *     ProtectionPeriodInMinutes: Number("int"),
 *   },
 * };
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AccountSettings
 * //   DeletionProtection: { // DeletionProtectionSettings
 * //     Enabled: true || false,
 * //     ProtectionPeriodInMinutes: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountSettingsCommandInput - {@link UpdateAccountSettingsCommandInput}
 * @returns {@link UpdateAccountSettingsCommandOutput}
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @public
 */
export class UpdateAccountSettingsCommand extends $Command
  .classBuilder<
    UpdateAccountSettingsCommandInput,
    UpdateAccountSettingsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "UpdateAccountSettings", {})
  .n("AppConfigClient", "UpdateAccountSettingsCommand")
  .sc(UpdateAccountSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountSettingsRequest;
      output: AccountSettings;
    };
    sdk: {
      input: UpdateAccountSettingsCommandInput;
      output: UpdateAccountSettingsCommandOutput;
    };
  };
}
