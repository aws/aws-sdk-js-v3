// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { UpdateIdentityProviderSettingsRequest, UpdateIdentityProviderSettingsResponse } from "../models/models_0";
import {
  de_UpdateIdentityProviderSettingsCommand,
  se_UpdateIdentityProviderSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandInput extends UpdateIdentityProviderSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandOutput
  extends UpdateIdentityProviderSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates additional product configuration settings for the registered identity
 *       provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // UpdateIdentityProviderSettingsRequest
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *     },
 *   },
 *   Product: "STRING_VALUE", // required
 *   UpdateSettings: { // UpdateSettings
 *     AddSubnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *     RemoveSubnets: [ // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIdentityProviderSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityProviderSettingsResponse
 * //   IdentityProviderSummary: { // IdentityProviderSummary
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //       },
 * //     },
 * //     Settings: { // Settings
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupId: "STRING_VALUE", // required
 * //     },
 * //     Product: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     FailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdentityProviderSettingsCommandInput - {@link UpdateIdentityProviderSettingsCommandInput}
 * @returns {@link UpdateIdentityProviderSettingsCommandOutput}
 * @see {@link UpdateIdentityProviderSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 * @public
 */
export class UpdateIdentityProviderSettingsCommand extends $Command
  .classBuilder<
    UpdateIdentityProviderSettingsCommandInput,
    UpdateIdentityProviderSettingsCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerUserSubscriptions", "UpdateIdentityProviderSettings", {})
  .n("LicenseManagerUserSubscriptionsClient", "UpdateIdentityProviderSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIdentityProviderSettingsCommand)
  .de(de_UpdateIdentityProviderSettingsCommand)
  .build() {}
