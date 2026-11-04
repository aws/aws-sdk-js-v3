// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentOutputsInput, ListEnvironmentOutputsOutput } from "../models/models_0";
import { ListEnvironmentOutputs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentOutputsCommand}.
 */
export interface ListEnvironmentOutputsCommandInput extends ListEnvironmentOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentOutputsCommand}.
 */
export interface ListEnvironmentOutputsCommandOutput extends ListEnvironmentOutputsOutput, __MetadataBearer {}

/**
 * List the infrastructure as code outputs for your environment.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentOutputsInput
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentOutputsOutput
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
 * @param ListEnvironmentOutputsCommandInput - {@link ListEnvironmentOutputsCommandInput}
 * @returns {@link ListEnvironmentOutputsCommandOutput}
 * @see {@link ListEnvironmentOutputsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentOutputsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentOutputsCommand extends command<ListEnvironmentOutputsCommandInput, ListEnvironmentOutputsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentOutputs",
  ListEnvironmentOutputs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentOutputsInput;
      output: ListEnvironmentOutputsOutput;
    };
    sdk: {
      input: ListEnvironmentOutputsCommandInput;
      output: ListEnvironmentOutputsCommandOutput;
    };
  };
}
