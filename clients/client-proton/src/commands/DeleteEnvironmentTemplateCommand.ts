// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEnvironmentTemplateInput, DeleteEnvironmentTemplateOutput } from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { DeleteEnvironmentTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentTemplateCommand}.
 */
export interface DeleteEnvironmentTemplateCommandInput extends DeleteEnvironmentTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentTemplateCommand}.
 */
export interface DeleteEnvironmentTemplateCommandOutput extends DeleteEnvironmentTemplateOutput, __MetadataBearer {}

/**
 * <p>If no other major or minor versions of an environment template exist, delete the environment template.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentTemplateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentTemplateOutput
 * //   environmentTemplate: { // EnvironmentTemplate
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     recommendedVersion: "STRING_VALUE",
 * //     encryptionKey: "STRING_VALUE",
 * //     provisioning: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentTemplateCommandInput - {@link DeleteEnvironmentTemplateCommandInput}
 * @returns {@link DeleteEnvironmentTemplateCommandOutput}
 * @see {@link DeleteEnvironmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentTemplateCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentTemplateCommand extends $Command
  .classBuilder<
    DeleteEnvironmentTemplateCommandInput,
    DeleteEnvironmentTemplateCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "DeleteEnvironmentTemplate", {})
  .n("ProtonClient", "DeleteEnvironmentTemplateCommand")
  .sc(DeleteEnvironmentTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentTemplateInput;
      output: DeleteEnvironmentTemplateOutput;
    };
    sdk: {
      input: DeleteEnvironmentTemplateCommandInput;
      output: DeleteEnvironmentTemplateCommandOutput;
    };
  };
}
