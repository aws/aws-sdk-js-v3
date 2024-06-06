// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigurationProfileRequest } from "../models/models_0";
import { de_DeleteConfigurationProfileCommand, se_DeleteConfigurationProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationProfileCommand}.
 */
export interface DeleteConfigurationProfileCommandInput extends DeleteConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationProfileCommand}.
 */
export interface DeleteConfigurationProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a configuration profile. Deleting a configuration profile does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // DeleteConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationProfileCommandInput - {@link DeleteConfigurationProfileCommandInput}
 * @returns {@link DeleteConfigurationProfileCommandOutput}
 * @see {@link DeleteConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To delete a configuration profile
 * ```javascript
 * // The following delete-configuration-profile example deletes the specified configuration profile.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f"
 * };
 * const command = new DeleteConfigurationProfileCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-configuration-profile-1632265401308
 * ```
 *
 */
export class DeleteConfigurationProfileCommand extends $Command
  .classBuilder<
    DeleteConfigurationProfileCommandInput,
    DeleteConfigurationProfileCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "DeleteConfigurationProfile", {})
  .n("AppConfigClient", "DeleteConfigurationProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationProfileCommand)
  .de(de_DeleteConfigurationProfileCommand)
  .build() {}
