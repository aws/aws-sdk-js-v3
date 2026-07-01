// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AccountSettings, UpdateAccountSettingsRequest } from "../models/models_0";
import { UpdateAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *   VendedMetrics: { // VendedMetricsSettings
 *     Enabled: true || false,
 *   },
 * };
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AccountSettings
 * //   DeletionProtection: { // DeletionProtectionSettings
 * //     Enabled: true || false,
 * //     ProtectionPeriodInMinutes: Number("int"),
 * //   },
 * //   VendedMetrics: { // VendedMetricsSettings
 * //     Enabled: true || false,
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
export class UpdateAccountSettingsCommand extends command<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountSettings",
  UpdateAccountSettings$
) {
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
