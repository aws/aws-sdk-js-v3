// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComponentOutputsInput, ListComponentOutputsOutput } from "../models/models_0";
import { ListComponentOutputs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComponentOutputsCommand}.
 */
export interface ListComponentOutputsCommandInput extends ListComponentOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListComponentOutputsCommand}.
 */
export interface ListComponentOutputsCommandOutput extends ListComponentOutputsOutput, __MetadataBearer {}

/**
 * Get a list of component Infrastructure as Code (IaC) outputs.
 *
 * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListComponentOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListComponentOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListComponentOutputsInput
 *   componentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListComponentOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentOutputsOutput
 * //   nextToken: "STRING_VALUE",
 * //   outputs: [ // OutputsList // required
 * //     { // Output
 * //       key: "STRING_VALUE",
 * //       valueString: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListComponentOutputsCommandInput - {@link ListComponentOutputsCommandInput}
 * @returns {@link ListComponentOutputsCommandOutput}
 * @see {@link ListComponentOutputsCommandInput} for command's `input` shape.
 * @see {@link ListComponentOutputsCommandOutput} for command's `response` shape.
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
export class ListComponentOutputsCommand extends command<ListComponentOutputsCommandInput, ListComponentOutputsCommandOutput>(
  _ep0,
  _mw0,
  "ListComponentOutputs",
  ListComponentOutputs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentOutputsInput;
      output: ListComponentOutputsOutput;
    };
    sdk: {
      input: ListComponentOutputsCommandInput;
      output: ListComponentOutputsCommandOutput;
    };
  };
}
