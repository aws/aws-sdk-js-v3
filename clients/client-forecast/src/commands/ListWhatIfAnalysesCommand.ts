// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWhatIfAnalysesRequest, ListWhatIfAnalysesResponse } from "../models/models_0";
import { ListWhatIfAnalyses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWhatIfAnalysesCommand}.
 */
export interface ListWhatIfAnalysesCommandInput extends ListWhatIfAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link ListWhatIfAnalysesCommand}.
 */
export interface ListWhatIfAnalysesCommandOutput extends ListWhatIfAnalysesResponse, __MetadataBearer {}

/**
 * Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfAnalysesCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfAnalysesCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListWhatIfAnalysesRequest
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
 * const command = new ListWhatIfAnalysesCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatIfAnalysesResponse
 * //   WhatIfAnalyses: [ // WhatIfAnalyses
 * //     { // WhatIfAnalysisSummary
 * //       WhatIfAnalysisArn: "STRING_VALUE",
 * //       WhatIfAnalysisName: "STRING_VALUE",
 * //       ForecastArn: "STRING_VALUE",
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
 * @param ListWhatIfAnalysesCommandInput - {@link ListWhatIfAnalysesCommandInput}
 * @returns {@link ListWhatIfAnalysesCommandOutput}
 * @see {@link ListWhatIfAnalysesCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfAnalysesCommandOutput} for command's `response` shape.
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
export class ListWhatIfAnalysesCommand extends command<ListWhatIfAnalysesCommandInput, ListWhatIfAnalysesCommandOutput>(
  _ep0,
  _mw0,
  "ListWhatIfAnalyses",
  ListWhatIfAnalyses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatIfAnalysesRequest;
      output: ListWhatIfAnalysesResponse;
    };
    sdk: {
      input: ListWhatIfAnalysesCommandInput;
      output: ListWhatIfAnalysesCommandOutput;
    };
  };
}
