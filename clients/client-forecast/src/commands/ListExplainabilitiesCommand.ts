// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExplainabilitiesRequest, ListExplainabilitiesResponse } from "../models/models_0";
import { ListExplainabilities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandInput extends ListExplainabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandOutput extends ListExplainabilitiesResponse, __MetadataBearer {}

/**
 * Returns a list of Explainability resources created using the CreateExplainability operation. This operation returns a summary for each Explainability. You can filter the list using an array of Filter objects.
 *
 * To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the DescribeExplainability operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilitiesCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilitiesCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListExplainabilitiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListExplainabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListExplainabilitiesResponse
 * //   Explainabilities: [ // Explainabilities
 * //     { // ExplainabilitySummary
 * //       ExplainabilityArn: "STRING_VALUE",
 * //       ExplainabilityName: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ExplainabilityConfig: { // ExplainabilityConfig
 * //         TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 * //         TimePointGranularity: "ALL" || "SPECIFIC", // required
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExplainabilitiesCommandInput - {@link ListExplainabilitiesCommandInput}
 * @returns {@link ListExplainabilitiesCommandOutput}
 * @see {@link ListExplainabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token is not valid. Tokens expire after 24 hours.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class ListExplainabilitiesCommand extends command<ListExplainabilitiesCommandInput, ListExplainabilitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListExplainabilities",
  ListExplainabilities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExplainabilitiesRequest;
      output: ListExplainabilitiesResponse;
    };
    sdk: {
      input: ListExplainabilitiesCommandInput;
      output: ListExplainabilitiesCommandOutput;
    };
  };
}
