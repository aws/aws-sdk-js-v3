// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServicePipelineOutputsInput, ListServicePipelineOutputsOutput } from "../models/models_0";
import { ListServicePipelineOutputs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandInput extends ListServicePipelineOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandOutput extends ListServicePipelineOutputsOutput, __MetadataBearer {}

/**
 * Get a list of service pipeline Infrastructure as Code (IaC) outputs.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServicePipelineOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServicePipelineOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServicePipelineOutputsInput
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListServicePipelineOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListServicePipelineOutputsOutput
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
 * @param ListServicePipelineOutputsCommandInput - {@link ListServicePipelineOutputsCommandInput}
 * @returns {@link ListServicePipelineOutputsCommandOutput}
 * @see {@link ListServicePipelineOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServicePipelineOutputsCommandOutput} for command's `response` shape.
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
export class ListServicePipelineOutputsCommand extends command<ListServicePipelineOutputsCommandInput, ListServicePipelineOutputsCommandOutput>(
  _ep0,
  _mw0,
  "ListServicePipelineOutputs",
  ListServicePipelineOutputs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicePipelineOutputsInput;
      output: ListServicePipelineOutputsOutput;
    };
    sdk: {
      input: ListServicePipelineOutputsCommandInput;
      output: ListServicePipelineOutputsCommandOutput;
    };
  };
}
