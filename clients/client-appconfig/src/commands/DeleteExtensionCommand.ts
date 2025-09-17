// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteExtensionRequest } from "../models/models_0";
import { de_DeleteExtensionCommand, se_DeleteExtensionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExtensionCommand}.
 */
export interface DeleteExtensionCommandInput extends DeleteExtensionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExtensionCommand}.
 */
export interface DeleteExtensionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an AppConfig extension. You must delete all associations to an
 *          extension before you delete the extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteExtensionRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   VersionNumber: Number("int"),
 * };
 * const command = new DeleteExtensionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExtensionCommandInput - {@link DeleteExtensionCommandInput}
 * @returns {@link DeleteExtensionCommandOutput}
 * @see {@link DeleteExtensionCommandInput} for command's `input` shape.
 * @see {@link DeleteExtensionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteExtensionCommand extends $Command
  .classBuilder<
    DeleteExtensionCommandInput,
    DeleteExtensionCommandOutput,
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
  .s("AmazonAppConfig", "DeleteExtension", {})
  .n("AppConfigClient", "DeleteExtensionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteExtensionCommand)
  .de(de_DeleteExtensionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExtensionRequest;
      output: {};
    };
    sdk: {
      input: DeleteExtensionCommandInput;
      output: DeleteExtensionCommandOutput;
    };
  };
}
