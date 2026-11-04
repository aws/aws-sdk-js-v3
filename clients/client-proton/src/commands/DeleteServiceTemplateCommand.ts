// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceTemplateInput, DeleteServiceTemplateOutput } from "../models/models_0";
import { DeleteServiceTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * If no other major or minor versions of the service template exist, delete the service template.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
export class DeleteServiceTemplateCommand extends command<DeleteServiceTemplateCommandInput, DeleteServiceTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceTemplate",
  DeleteServiceTemplate$
) {
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
