// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServiceTemplateVersionInput,
  CreateServiceTemplateVersionInputFilterSensitiveLog,
  CreateServiceTemplateVersionOutput,
  CreateServiceTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateServiceTemplateVersionCommand,
  se_CreateServiceTemplateVersionCommand,
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
 * The input for {@link CreateServiceTemplateVersionCommand}.
 */
export interface CreateServiceTemplateVersionCommandInput extends CreateServiceTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceTemplateVersionCommand}.
 */
export interface CreateServiceTemplateVersionCommandOutput
  extends CreateServiceTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>Create a new major or minor version of a service template. A major version of a service
 *       template is a version that <i>isn't</i> backward compatible. A minor version of
 *       a service template is a version that's backward compatible within its major version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateServiceTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateServiceTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // CreateServiceTemplateVersionInput
 *   clientToken: "STRING_VALUE",
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   majorVersion: "STRING_VALUE",
 *   source: { // TemplateVersionSourceInput Union: only one key present
 *     s3: { // S3ObjectSource
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *     },
 *   },
 *   compatibleEnvironmentTemplates: [ // CompatibleEnvironmentTemplateInputList // required
 *     { // CompatibleEnvironmentTemplateInput
 *       templateName: "STRING_VALUE", // required
 *       majorVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   supportedComponentSources: [ // ServiceTemplateSupportedComponentSourceInputList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateServiceTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceTemplateVersionOutput
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
 * @param CreateServiceTemplateVersionCommandInput - {@link CreateServiceTemplateVersionCommandInput}
 * @returns {@link CreateServiceTemplateVersionCommandOutput}
 * @see {@link CreateServiceTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceTemplateVersionCommandOutput} for command's `response` shape.
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
export class CreateServiceTemplateVersionCommand extends $Command
  .classBuilder<
    CreateServiceTemplateVersionCommandInput,
    CreateServiceTemplateVersionCommandOutput,
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
  .s("AwsProton20200720", "CreateServiceTemplateVersion", {})
  .n("ProtonClient", "CreateServiceTemplateVersionCommand")
  .f(CreateServiceTemplateVersionInputFilterSensitiveLog, CreateServiceTemplateVersionOutputFilterSensitiveLog)
  .ser(se_CreateServiceTemplateVersionCommand)
  .de(de_CreateServiceTemplateVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceTemplateVersionInput;
      output: CreateServiceTemplateVersionOutput;
    };
    sdk: {
      input: CreateServiceTemplateVersionCommandInput;
      output: CreateServiceTemplateVersionCommandOutput;
    };
  };
}
