// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServiceTemplateInput,
  CreateServiceTemplateInputFilterSensitiveLog,
  CreateServiceTemplateOutput,
  CreateServiceTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateServiceTemplateCommand, se_CreateServiceTemplateCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceTemplateCommand}.
 */
export interface CreateServiceTemplateCommandInput extends CreateServiceTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceTemplateCommand}.
 */
export interface CreateServiceTemplateCommandOutput extends CreateServiceTemplateOutput, __MetadataBearer {}

/**
 * <p>Create a service template. The administrator creates a service template to define
 *       standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn,
 *       select the service template from Proton. If the selected service template includes a
 *       service pipeline definition, they provide a link to their source code repository. Proton
 *       then deploys and manages the infrastructure defined by the selected service template. For more
 *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateServiceTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateServiceTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateServiceTemplateInput
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   encryptionKey: "STRING_VALUE",
 *   pipelineProvisioning: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateServiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceTemplateOutput
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
 * @param CreateServiceTemplateCommandInput - {@link CreateServiceTemplateCommandInput}
 * @returns {@link CreateServiceTemplateCommandOutput}
 * @see {@link CreateServiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateServiceTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
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
export class CreateServiceTemplateCommand extends $Command
  .classBuilder<
    CreateServiceTemplateCommandInput,
    CreateServiceTemplateCommandOutput,
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
  .s("AwsProton20200720", "CreateServiceTemplate", {})
  .n("ProtonClient", "CreateServiceTemplateCommand")
  .f(CreateServiceTemplateInputFilterSensitiveLog, CreateServiceTemplateOutputFilterSensitiveLog)
  .ser(se_CreateServiceTemplateCommand)
  .de(de_CreateServiceTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceTemplateInput;
      output: CreateServiceTemplateOutput;
    };
    sdk: {
      input: CreateServiceTemplateCommandInput;
      output: CreateServiceTemplateCommandOutput;
    };
  };
}
