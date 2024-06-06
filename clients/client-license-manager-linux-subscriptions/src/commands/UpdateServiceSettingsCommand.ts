// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { UpdateServiceSettingsRequest, UpdateServiceSettingsResponse } from "../models/models_0";
import { de_UpdateServiceSettingsCommand, se_UpdateServiceSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSettingsCommand}.
 */
export interface UpdateServiceSettingsCommandInput extends UpdateServiceSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSettingsCommand}.
 */
export interface UpdateServiceSettingsCommandOutput extends UpdateServiceSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the service settings for Linux subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, UpdateServiceSettingsCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, UpdateServiceSettingsCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // UpdateServiceSettingsRequest
 *   LinuxSubscriptionsDiscovery: "STRING_VALUE", // required
 *   LinuxSubscriptionsDiscoverySettings: { // LinuxSubscriptionsDiscoverySettings
 *     SourceRegions: [ // StringList // required
 *       "STRING_VALUE",
 *     ],
 *     OrganizationIntegration: "STRING_VALUE", // required
 *   },
 *   AllowUpdate: true || false,
 * };
 * const command = new UpdateServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceSettingsResponse
 * //   LinuxSubscriptionsDiscovery: "STRING_VALUE",
 * //   LinuxSubscriptionsDiscoverySettings: { // LinuxSubscriptionsDiscoverySettings
 * //     SourceRegions: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     OrganizationIntegration: "STRING_VALUE", // required
 * //   },
 * //   Status: "STRING_VALUE",
 * //   StatusMessage: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   HomeRegions: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateServiceSettingsCommandInput - {@link UpdateServiceSettingsCommandInput}
 * @returns {@link UpdateServiceSettingsCommandOutput}
 * @see {@link UpdateServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.</p>
 *
 * @public
 */
export class UpdateServiceSettingsCommand extends $Command
  .classBuilder<
    UpdateServiceSettingsCommandInput,
    UpdateServiceSettingsCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerLinuxSubscriptions", "UpdateServiceSettings", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "UpdateServiceSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceSettingsCommand)
  .de(de_UpdateServiceSettingsCommand)
  .build() {}
