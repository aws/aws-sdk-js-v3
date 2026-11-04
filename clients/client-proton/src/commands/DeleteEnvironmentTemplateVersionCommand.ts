// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentTemplateVersionInput, DeleteEnvironmentTemplateVersionOutput } from "../models/models_0";
import { DeleteEnvironmentTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandInput extends DeleteEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandOutput extends DeleteEnvironmentTemplateVersionOutput, __MetadataBearer {}

/**
 * If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the `Recommended` version. Delete the `Recommended` version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.
 *
 * Delete a minor version of an environment template if it *isn't* the `Recommended` version. Delete a `Recommended` minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentTemplateVersionOutput
 * //   environmentTemplateVersion: { // EnvironmentTemplateVersion
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
 * //     schema: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentTemplateVersionCommandInput - {@link DeleteEnvironmentTemplateVersionCommandInput}
 * @returns {@link DeleteEnvironmentTemplateVersionCommandOutput}
 * @see {@link DeleteEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentTemplateVersionCommand extends command<DeleteEnvironmentTemplateVersionCommandInput, DeleteEnvironmentTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentTemplateVersion",
  DeleteEnvironmentTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentTemplateVersionInput;
      output: DeleteEnvironmentTemplateVersionOutput;
    };
    sdk: {
      input: DeleteEnvironmentTemplateVersionCommandInput;
      output: DeleteEnvironmentTemplateVersionCommandOutput;
    };
  };
}
