// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ConfigurationProfile,
  ConfigurationProfileFilterSensitiveLog,
  UpdateConfigurationProfileRequest,
  UpdateConfigurationProfileRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateConfigurationProfileCommand, se_UpdateConfigurationProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationProfileCommand}.
 */
export interface UpdateConfigurationProfileCommandInput extends UpdateConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationProfileCommand}.
 */
export interface UpdateConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}

/**
 * <p>Updates a configuration profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // UpdateConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RetrievalRoleArn: "STRING_VALUE",
 *   Validators: [ // ValidatorList
 *     { // Validator
 *       Type: "JSON_SCHEMA" || "LAMBDA", // required
 *       Content: "STRING_VALUE", // required
 *     },
 *   ],
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationProfile
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   RetrievalRoleArn: "STRING_VALUE",
 * //   Validators: [ // ValidatorList
 * //     { // Validator
 * //       Type: "JSON_SCHEMA" || "LAMBDA", // required
 * //       Content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Type: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConfigurationProfileCommandInput - {@link UpdateConfigurationProfileCommandInput}
 * @returns {@link UpdateConfigurationProfileCommandOutput}
 * @see {@link UpdateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
 *
 * @example To update a configuration profile
 * ```javascript
 * // The following update-configuration-profile example updates the description of the specified configuration profile.
 * const input = {
 *   ApplicationId: "339ohji",
 *   ConfigurationProfileId: "ur8hx2f",
 *   Description: "Configuration profile used for examples."
 * };
 * const command = new UpdateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationId: "339ohji",
 *   Description: "Configuration profile used for examples.",
 *   Id: "ur8hx2f",
 *   LocationUri: "ssm-parameter://Example-Parameter",
 *   Name: "Example-Configuration-Profile",
 *   RetrievalRoleArn: "arn:aws:iam::111122223333:role/Example-App-Config-Role"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConfigurationProfileCommand extends $Command
  .classBuilder<
    UpdateConfigurationProfileCommandInput,
    UpdateConfigurationProfileCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "UpdateConfigurationProfile", {})
  .n("AppConfigClient", "UpdateConfigurationProfileCommand")
  .f(UpdateConfigurationProfileRequestFilterSensitiveLog, ConfigurationProfileFilterSensitiveLog)
  .ser(se_UpdateConfigurationProfileCommand)
  .de(de_UpdateConfigurationProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationProfileRequest;
      output: ConfigurationProfile;
    };
    sdk: {
      input: UpdateConfigurationProfileCommandInput;
      output: UpdateConfigurationProfileCommandOutput;
    };
  };
}
