// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteExtensionAssociationRequest } from "../models/models_0";
import { DeleteExtensionAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExtensionAssociationCommand}.
 */
export interface DeleteExtensionAssociationCommandInput extends DeleteExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExtensionAssociationCommand}.
 */
export interface DeleteExtensionAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an extension association. This action doesn't delete extensions defined in the
 *          association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteExtensionAssociationRequest
 *   ExtensionAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteExtensionAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExtensionAssociationCommandInput - {@link DeleteExtensionAssociationCommandInput}
 * @returns {@link DeleteExtensionAssociationCommandOutput}
 * @see {@link DeleteExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteExtensionAssociationCommandOutput} for command's `response` shape.
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
export class DeleteExtensionAssociationCommand extends $Command
  .classBuilder<
    DeleteExtensionAssociationCommandInput,
    DeleteExtensionAssociationCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "DeleteExtensionAssociation", {})
  .n("AppConfigClient", "DeleteExtensionAssociationCommand")
  .sc(DeleteExtensionAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExtensionAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteExtensionAssociationCommandInput;
      output: DeleteExtensionAssociationCommandOutput;
    };
  };
}
