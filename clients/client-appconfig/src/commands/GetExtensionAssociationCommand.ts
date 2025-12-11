// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExtensionAssociation, GetExtensionAssociationRequest } from "../models/models_0";
import { GetExtensionAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExtensionAssociationCommand}.
 */
export interface GetExtensionAssociationCommandInput extends GetExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetExtensionAssociationCommand}.
 */
export interface GetExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * <p>Returns information about an AppConfig extension association. For more
 *          information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetExtensionAssociationRequest
 *   ExtensionAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetExtensionAssociationCommand(input);
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
 * @param GetExtensionAssociationCommandInput - {@link GetExtensionAssociationCommandInput}
 * @returns {@link GetExtensionAssociationCommandOutput}
 * @see {@link GetExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link GetExtensionAssociationCommandOutput} for command's `response` shape.
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
export class GetExtensionAssociationCommand extends $Command
  .classBuilder<
    GetExtensionAssociationCommandInput,
    GetExtensionAssociationCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "GetExtensionAssociation", {})
  .n("AppConfigClient", "GetExtensionAssociationCommand")
  .sc(GetExtensionAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExtensionAssociationRequest;
      output: ExtensionAssociation;
    };
    sdk: {
      input: GetExtensionAssociationCommandInput;
      output: GetExtensionAssociationCommandOutput;
    };
  };
}
