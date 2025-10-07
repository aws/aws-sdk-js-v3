// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentTemplateInput,
  UpdateEnvironmentTemplateInputFilterSensitiveLog,
  UpdateEnvironmentTemplateOutput,
  UpdateEnvironmentTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateEnvironmentTemplateCommand, se_UpdateEnvironmentTemplateCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentTemplateCommand}.
 */
export interface UpdateEnvironmentTemplateCommandInput extends UpdateEnvironmentTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentTemplateCommand}.
 */
export interface UpdateEnvironmentTemplateCommandOutput extends UpdateEnvironmentTemplateOutput, __MetadataBearer {}

/**
 * <p>Update an environment template.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateEnvironmentTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateEnvironmentTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateEnvironmentTemplateInput
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentTemplateOutput
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
 * @param UpdateEnvironmentTemplateCommandInput - {@link UpdateEnvironmentTemplateCommandInput}
 * @returns {@link UpdateEnvironmentTemplateCommandOutput}
 * @see {@link UpdateEnvironmentTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentTemplateCommandOutput} for command's `response` shape.
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
export class UpdateEnvironmentTemplateCommand extends $Command
  .classBuilder<
    UpdateEnvironmentTemplateCommandInput,
    UpdateEnvironmentTemplateCommandOutput,
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
  .s("AwsProton20200720", "UpdateEnvironmentTemplate", {})
  .n("ProtonClient", "UpdateEnvironmentTemplateCommand")
  .f(UpdateEnvironmentTemplateInputFilterSensitiveLog, UpdateEnvironmentTemplateOutputFilterSensitiveLog)
  .ser(se_UpdateEnvironmentTemplateCommand)
  .de(de_UpdateEnvironmentTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentTemplateInput;
      output: UpdateEnvironmentTemplateOutput;
    };
    sdk: {
      input: UpdateEnvironmentTemplateCommandInput;
      output: UpdateEnvironmentTemplateCommandOutput;
    };
  };
}
