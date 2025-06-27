// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHostedConfigurationVersionRequest } from "../models/models_0";
import {
  de_DeleteHostedConfigurationVersionCommand,
  se_DeleteHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHostedConfigurationVersionCommand}.
 */
export interface DeleteHostedConfigurationVersionCommandInput extends DeleteHostedConfigurationVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHostedConfigurationVersionCommand}.
 */
export interface DeleteHostedConfigurationVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a version of a configuration from the AppConfig hosted configuration
 *          store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // DeleteHostedConfigurationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   VersionNumber: Number("int"), // required
 * };
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHostedConfigurationVersionCommandInput - {@link DeleteHostedConfigurationVersionCommandInput}
 * @returns {@link DeleteHostedConfigurationVersionCommandOutput}
 * @see {@link DeleteHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedConfigurationVersionCommandOutput} for command's `response` shape.
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
 * @example To delete a hosted configuration version
 * ```javascript
 * // The following delete-hosted-configuration-version example deletes a configuration version hosted in the AWS AppConfig configuration store.
 * const input = {
 *   ApplicationId: "339ohji",
 *   ConfigurationProfileId: "ur8hx2f",
 *   VersionNumber: 1
 * };
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteHostedConfigurationVersionCommand extends $Command
  .classBuilder<
    DeleteHostedConfigurationVersionCommandInput,
    DeleteHostedConfigurationVersionCommandOutput,
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
  .s("AmazonAppConfig", "DeleteHostedConfigurationVersion", {})
  .n("AppConfigClient", "DeleteHostedConfigurationVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHostedConfigurationVersionCommand)
  .de(de_DeleteHostedConfigurationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHostedConfigurationVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteHostedConfigurationVersionCommandInput;
      output: DeleteHostedConfigurationVersionCommandOutput;
    };
  };
}
