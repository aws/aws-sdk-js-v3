// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentTemplateInput, DeleteEnvironmentTemplateOutput } from "../models/models_0";
import { DeleteEnvironmentTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * If no other major or minor versions of an environment template exist, delete the environment template.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
export class DeleteEnvironmentTemplateCommand extends command<DeleteEnvironmentTemplateCommandInput, DeleteEnvironmentTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentTemplate",
  DeleteEnvironmentTemplate$
) {
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
