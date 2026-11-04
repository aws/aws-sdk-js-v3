// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceTemplateVersionInput, DeleteServiceTemplateVersionOutput } from "../models/models_0";
import { DeleteServiceTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteServiceTemplateVersionCommandOutput extends DeleteServiceTemplateVersionOutput, __MetadataBearer {}

/**
 * If no other minor versions of a service template exist, delete a major version of the service template if it's not the `Recommended` version. Delete the `Recommended` version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that *isn't* backwards compatible.
 *
 * Delete a minor version of a service template if it's not the `Recommended` version. Delete a `Recommended` minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
export class DeleteServiceTemplateVersionCommand extends command<DeleteServiceTemplateVersionCommandInput, DeleteServiceTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceTemplateVersion",
  DeleteServiceTemplateVersion$
) {
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
