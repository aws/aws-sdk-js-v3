// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLogPatternSetsRequest, ListLogPatternSetsResponse } from "../models/models_0";
import { ListLogPatternSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLogPatternSetsCommand}.
 */
export interface ListLogPatternSetsCommandInput extends ListLogPatternSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogPatternSetsCommand}.
 */
export interface ListLogPatternSetsCommandOutput extends ListLogPatternSetsResponse, __MetadataBearer {}

/**
 * Lists the log pattern sets in the specific application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternSetsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListLogPatternSetsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListLogPatternSetsRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListLogPatternSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogPatternSetsResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * //   LogPatternSets: [ // LogPatternSetList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogPatternSetsCommandInput - {@link ListLogPatternSetsCommandInput}
 * @returns {@link ListLogPatternSetsCommandOutput}
 * @see {@link ListLogPatternSetsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternSetsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource does not exist in the customer account.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link ApplicationInsightsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationInsights service.
 *
 * @public
 */
export class ListLogPatternSetsCommand extends command<ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListLogPatternSets",
  ListLogPatternSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogPatternSetsRequest;
      output: ListLogPatternSetsResponse;
    };
    sdk: {
      input: ListLogPatternSetsCommandInput;
      output: ListLogPatternSetsCommandOutput;
    };
  };
}
