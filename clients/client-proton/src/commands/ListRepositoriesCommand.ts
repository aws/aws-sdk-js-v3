// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRepositoriesInput, ListRepositoriesOutput } from "../models/models_0";
import { ListRepositories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandInput extends ListRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandOutput extends ListRepositoriesOutput, __MetadataBearer {}

/**
 * List linked repositories with detail data.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListRepositoriesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListRepositoriesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListRepositoriesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoriesOutput
 * //   nextToken: "STRING_VALUE",
 * //   repositories: [ // RepositorySummaryList // required
 * //     { // RepositorySummary
 * //       arn: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       connectionArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRepositoriesCommandInput - {@link ListRepositoriesCommandInput}
 * @returns {@link ListRepositoriesCommandOutput}
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
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
export class ListRepositoriesCommand extends command<ListRepositoriesCommandInput, ListRepositoriesCommandOutput>(
  _ep0,
  _mw0,
  "ListRepositories",
  ListRepositories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoriesInput;
      output: ListRepositoriesOutput;
    };
    sdk: {
      input: ListRepositoriesCommandInput;
      output: ListRepositoriesCommandOutput;
    };
  };
}
