// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentTemplateVersionInput, DeleteEnvironmentTemplateVersionOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { DeleteEnvironmentTemplateVersion } from "../schemas/schemas_5_Template";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandInput extends DeleteEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandOutput
  extends DeleteEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the
 *         <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions
 *       of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p>
 *          <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a
 *         <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an
 *       environment template is a version that's backward compatible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentTemplateVersionOutput
 * //   environmentTemplateVersion: { // EnvironmentTemplateVersion
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
 * //     schema: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentTemplateVersionCommandInput - {@link DeleteEnvironmentTemplateVersionCommandInput}
 * @returns {@link DeleteEnvironmentTemplateVersionCommandOutput}
 * @see {@link DeleteEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentTemplateVersionCommand extends $Command
  .classBuilder<
    DeleteEnvironmentTemplateVersionCommandInput,
    DeleteEnvironmentTemplateVersionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "DeleteEnvironmentTemplateVersion", {})
  .n("ProtonClient", "DeleteEnvironmentTemplateVersionCommand")
  .sc(DeleteEnvironmentTemplateVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentTemplateVersionInput;
      output: DeleteEnvironmentTemplateVersionOutput;
    };
    sdk: {
      input: DeleteEnvironmentTemplateVersionCommandInput;
      output: DeleteEnvironmentTemplateVersionCommandOutput;
    };
  };
}
