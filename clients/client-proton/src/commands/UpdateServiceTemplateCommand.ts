// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateServiceTemplateInput,
  UpdateServiceTemplateInputFilterSensitiveLog,
  UpdateServiceTemplateOutput,
  UpdateServiceTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateServiceTemplateCommand, se_UpdateServiceTemplateCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceTemplateCommand}.
 */
export interface UpdateServiceTemplateCommandInput extends UpdateServiceTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceTemplateCommand}.
 */
export interface UpdateServiceTemplateCommandOutput extends UpdateServiceTemplateOutput, __MetadataBearer {}

/**
 * <p>Update a service template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceTemplateInput
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateServiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceTemplateOutput
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
 * @param UpdateServiceTemplateCommandInput - {@link UpdateServiceTemplateCommandInput}
 * @returns {@link UpdateServiceTemplateCommandOutput}
 * @see {@link UpdateServiceTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateServiceTemplateCommand extends $Command
  .classBuilder<
    UpdateServiceTemplateCommandInput,
    UpdateServiceTemplateCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "UpdateServiceTemplate", {})
  .n("ProtonClient", "UpdateServiceTemplateCommand")
  .f(UpdateServiceTemplateInputFilterSensitiveLog, UpdateServiceTemplateOutputFilterSensitiveLog)
  .ser(se_UpdateServiceTemplateCommand)
  .de(de_UpdateServiceTemplateCommand)
  .build() {}
