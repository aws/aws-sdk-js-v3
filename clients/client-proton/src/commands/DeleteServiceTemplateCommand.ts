// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceTemplateInput, DeleteServiceTemplateOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { DeleteServiceTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceTemplateCommand}.
 */
export interface DeleteServiceTemplateCommandInput extends DeleteServiceTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceTemplateCommand}.
 */
export interface DeleteServiceTemplateCommandOutput extends DeleteServiceTemplateOutput, __MetadataBearer {}

/**
 * <p>If no other major or minor versions of the service template exist, delete the service
 *       template.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteServiceTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteServiceTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteServiceTemplateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceTemplateOutput
 * //   serviceTemplate: { // ServiceTemplate
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     recommendedVersion: "STRING_VALUE",
 * //     encryptionKey: "STRING_VALUE",
 * //     pipelineProvisioning: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServiceTemplateCommandInput - {@link DeleteServiceTemplateCommandInput}
 * @returns {@link DeleteServiceTemplateCommandOutput}
 * @see {@link DeleteServiceTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceTemplateCommandOutput} for command's `response` shape.
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
export class DeleteServiceTemplateCommand extends $Command
  .classBuilder<
    DeleteServiceTemplateCommandInput,
    DeleteServiceTemplateCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "DeleteServiceTemplate", {})
  .n("ProtonClient", "DeleteServiceTemplateCommand")
  .sc(DeleteServiceTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceTemplateInput;
      output: DeleteServiceTemplateOutput;
    };
    sdk: {
      input: DeleteServiceTemplateCommandInput;
      output: DeleteServiceTemplateCommandOutput;
    };
  };
}
