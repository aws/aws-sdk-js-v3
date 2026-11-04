// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceTemplateVersionInput, UpdateServiceTemplateVersionOutput } from "../models/models_0";
import { UpdateServiceTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceTemplateVersionCommand}.
 */
export interface UpdateServiceTemplateVersionCommandInput extends UpdateServiceTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceTemplateVersionCommand}.
 */
export interface UpdateServiceTemplateVersionCommandOutput extends UpdateServiceTemplateVersionOutput, __MetadataBearer {}

/**
 * Update a major or minor version of a service template.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   compatibleEnvironmentTemplates: [ // CompatibleEnvironmentTemplateInputList
 *     { // CompatibleEnvironmentTemplateInput
 *       templateName: "STRING_VALUE", // required
 *       majorVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   supportedComponentSources: [ // ServiceTemplateSupportedComponentSourceInputList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateServiceTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceTemplateVersionOutput
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
 * @param UpdateServiceTemplateVersionCommandInput - {@link UpdateServiceTemplateVersionCommandInput}
 * @returns {@link UpdateServiceTemplateVersionCommandOutput}
 * @see {@link UpdateServiceTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class UpdateServiceTemplateVersionCommand extends command<UpdateServiceTemplateVersionCommandInput, UpdateServiceTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceTemplateVersion",
  UpdateServiceTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceTemplateVersionInput;
      output: UpdateServiceTemplateVersionOutput;
    };
    sdk: {
      input: UpdateServiceTemplateVersionCommandInput;
      output: UpdateServiceTemplateVersionCommandOutput;
    };
  };
}
