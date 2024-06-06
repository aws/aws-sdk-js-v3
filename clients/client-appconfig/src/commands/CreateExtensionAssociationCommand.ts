// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateExtensionAssociationRequest, ExtensionAssociation } from "../models/models_0";
import { de_CreateExtensionAssociationCommand, se_CreateExtensionAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandInput extends CreateExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * <p>When you create an extension or configure an Amazon Web Services authored extension, you
 *          associate the extension with an AppConfig application, environment, or
 *          configuration profile. For example, you can choose to run the <code>AppConfig
 *             deployment events to Amazon SNS</code>
 *          Amazon Web Services authored extension and receive notifications on an Amazon SNS
 *          topic anytime a configuration deployment is started for a specific application. Defining
 *          which extension to associate with an AppConfig resource is called an
 *             <i>extension association</i>. An extension association is a specified
 *          relationship between an extension and an AppConfig resource, such as an
 *          application or a configuration profile. For more information about extensions and
 *          associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // CreateExtensionAssociationRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   ExtensionVersionNumber: Number("int"),
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   Parameters: { // ParameterValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExtensionAssociationCommand(input);
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
 * @param CreateExtensionAssociationCommandInput - {@link CreateExtensionAssociationCommandInput}
 * @returns {@link CreateExtensionAssociationCommandOutput}
 * @see {@link CreateExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateExtensionAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 */
export class CreateExtensionAssociationCommand extends $Command
  .classBuilder<
    CreateExtensionAssociationCommandInput,
    CreateExtensionAssociationCommandOutput,
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
  .s("AmazonAppConfig", "CreateExtensionAssociation", {})
  .n("AppConfigClient", "CreateExtensionAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateExtensionAssociationCommand)
  .de(de_CreateExtensionAssociationCommand)
  .build() {}
