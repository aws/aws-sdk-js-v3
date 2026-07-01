// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentTemplateInput, GetEnvironmentTemplateOutput } from "../models/models_0";
import { GetEnvironmentTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentTemplateCommand}.
 */
export interface GetEnvironmentTemplateCommandInput extends GetEnvironmentTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentTemplateCommand}.
 */
export interface GetEnvironmentTemplateCommandOutput extends GetEnvironmentTemplateOutput, __MetadataBearer {}

/**
 * <p>Get detailed data for an environment template.</p>
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentTemplateCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentTemplateCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetEnvironmentTemplateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentTemplateOutput
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
 * @param GetEnvironmentTemplateCommandInput - {@link GetEnvironmentTemplateCommandInput}
 * @returns {@link GetEnvironmentTemplateCommandOutput}
 * @see {@link GetEnvironmentTemplateCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
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
export class GetEnvironmentTemplateCommand extends command<GetEnvironmentTemplateCommandInput, GetEnvironmentTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentTemplate",
  GetEnvironmentTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentTemplateInput;
      output: GetEnvironmentTemplateOutput;
    };
    sdk: {
      input: GetEnvironmentTemplateCommandInput;
      output: GetEnvironmentTemplateCommandOutput;
    };
  };
}
