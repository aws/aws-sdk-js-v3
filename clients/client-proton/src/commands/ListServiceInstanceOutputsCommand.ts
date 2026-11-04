// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceInstanceOutputsInput, ListServiceInstanceOutputsOutput } from "../models/models_0";
import { ListServiceInstanceOutputs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceInstanceOutputsCommand}.
 */
export interface ListServiceInstanceOutputsCommandInput extends ListServiceInstanceOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstanceOutputsCommand}.
 */
export interface ListServiceInstanceOutputsCommandOutput extends ListServiceInstanceOutputsOutput, __MetadataBearer {}

/**
 * Get a list service of instance Infrastructure as Code (IaC) outputs.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstanceOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstanceOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceInstanceOutputsInput
 *   serviceInstanceName: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListServiceInstanceOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceInstanceOutputsOutput
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
 * @param ListServiceInstanceOutputsCommandInput - {@link ListServiceInstanceOutputsCommandInput}
 * @returns {@link ListServiceInstanceOutputsCommandOutput}
 * @see {@link ListServiceInstanceOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstanceOutputsCommandOutput} for command's `response` shape.
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
export class ListServiceInstanceOutputsCommand extends command<ListServiceInstanceOutputsCommandInput, ListServiceInstanceOutputsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceInstanceOutputs",
  ListServiceInstanceOutputs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceInstanceOutputsInput;
      output: ListServiceInstanceOutputsOutput;
    };
    sdk: {
      input: ListServiceInstanceOutputsCommandInput;
      output: ListServiceInstanceOutputsCommandOutput;
    };
  };
}
