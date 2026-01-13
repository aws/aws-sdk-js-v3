// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExtensionAssociation, UpdateExtensionAssociationRequest } from "../models/models_0";
import { UpdateExtensionAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExtensionAssociationCommand}.
 */
export interface UpdateExtensionAssociationCommandInput extends UpdateExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExtensionAssociationCommand}.
 */
export interface UpdateExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * <p>Updates an association. For more information about extensions and associations, see
 *             <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // UpdateExtensionAssociationRequest
 *   ExtensionAssociationId: "STRING_VALUE", // required
 *   Parameters: { // ParameterValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateExtensionAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ExtensionAssociation
 * //   Id: "STRING_VALUE",
 * //   ExtensionArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Parameters: { // ParameterValueMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ExtensionVersionNumber: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateExtensionAssociationCommandInput - {@link UpdateExtensionAssociationCommandInput}
 * @returns {@link UpdateExtensionAssociationCommandOutput}
 * @see {@link UpdateExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateExtensionAssociationCommandOutput} for command's `response` shape.
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
export class UpdateExtensionAssociationCommand extends $Command
  .classBuilder<
    UpdateExtensionAssociationCommandInput,
    UpdateExtensionAssociationCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "UpdateExtensionAssociation", {})
  .n("AppConfigClient", "UpdateExtensionAssociationCommand")
  .sc(UpdateExtensionAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExtensionAssociationRequest;
      output: ExtensionAssociation;
    };
    sdk: {
      input: UpdateExtensionAssociationCommandInput;
      output: UpdateExtensionAssociationCommandOutput;
    };
  };
}
