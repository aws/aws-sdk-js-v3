// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteServiceTemplateVersionInput,
  DeleteServiceTemplateVersionOutput,
  DeleteServiceTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DeleteServiceTemplateVersionCommand,
  se_DeleteServiceTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceTemplateVersionCommand}.
 */
export interface DeleteServiceTemplateVersionCommandInput extends DeleteServiceTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceTemplateVersionCommand}.
 */
export interface DeleteServiceTemplateVersionCommandOutput
  extends DeleteServiceTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>If no other minor versions of a service template exist, delete a major version of the
 *       service template if it's not the <code>Recommended</code> version. Delete the
 *         <code>Recommended</code> version of the service template if no other major versions or minor
 *       versions of the service template exist. A major version of a service template is a version
 *       that <i>isn't</i> backwards compatible.</p>
 *          <p>Delete a minor version of a service template if it's not the <code>Recommended</code>
 *       version. Delete a <code>Recommended</code> minor version of the service template if no other
 *       minor versions of the service template exist. A minor version of a service template is a
 *       version that's backwards compatible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteServiceTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteServiceTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteServiceTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceTemplateVersionOutput
 * //   serviceTemplateVersion: { // ServiceTemplateVersion
 * //     templateName: "STRING_VALUE", // required
 * //     majorVersion: "STRING_VALUE", // required
 * //     minorVersion: "STRING_VALUE", // required
 * //     recommendedMinorVersion: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusMessage: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     compatibleEnvironmentTemplates: [ // CompatibleEnvironmentTemplateList // required
 * //       { // CompatibleEnvironmentTemplate
 * //         templateName: "STRING_VALUE", // required
 * //         majorVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     schema: "STRING_VALUE",
 * //     supportedComponentSources: [ // ServiceTemplateSupportedComponentSourceInputList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServiceTemplateVersionCommandInput - {@link DeleteServiceTemplateVersionCommandInput}
 * @returns {@link DeleteServiceTemplateVersionCommandOutput}
 * @see {@link DeleteServiceTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class DeleteServiceTemplateVersionCommand extends $Command
  .classBuilder<
    DeleteServiceTemplateVersionCommandInput,
    DeleteServiceTemplateVersionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "DeleteServiceTemplateVersion", {})
  .n("ProtonClient", "DeleteServiceTemplateVersionCommand")
  .f(void 0, DeleteServiceTemplateVersionOutputFilterSensitiveLog)
  .ser(se_DeleteServiceTemplateVersionCommand)
  .de(de_DeleteServiceTemplateVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceTemplateVersionInput;
      output: DeleteServiceTemplateVersionOutput;
    };
    sdk: {
      input: DeleteServiceTemplateVersionCommandInput;
      output: DeleteServiceTemplateVersionCommandOutput;
    };
  };
}
