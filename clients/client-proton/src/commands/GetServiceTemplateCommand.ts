// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceTemplateInput, GetServiceTemplateOutput } from "../models/models_0";
import { GetServiceTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceTemplateCommand}.
 */
export interface GetServiceTemplateCommandInput extends GetServiceTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetServiceTemplateCommand}.
 */
export interface GetServiceTemplateCommandOutput extends GetServiceTemplateOutput, __MetadataBearer {}

/**
 * Get detailed data for a service template.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetServiceTemplateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetServiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceTemplateOutput
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
 * @param GetServiceTemplateCommandInput - {@link GetServiceTemplateCommandInput}
 * @returns {@link GetServiceTemplateCommandOutput}
 * @see {@link GetServiceTemplateCommandInput} for command's `input` shape.
 * @see {@link GetServiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
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
export class GetServiceTemplateCommand extends command<GetServiceTemplateCommandInput, GetServiceTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceTemplate",
  GetServiceTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceTemplateInput;
      output: GetServiceTemplateOutput;
    };
    sdk: {
      input: GetServiceTemplateCommandInput;
      output: GetServiceTemplateCommandOutput;
    };
  };
}
