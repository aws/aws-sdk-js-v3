// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListWhatIfForecastsRequest, ListWhatIfForecastsResponse } from "../models/models_0";
import { ListWhatIfForecasts } from "../schemas/schemas_1_What";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWhatIfForecastsCommand}.
 */
export interface ListWhatIfForecastsCommandInput extends ListWhatIfForecastsRequest {}
/**
 * @public
 *
 * The output of {@link ListWhatIfForecastsCommand}.
 */
export interface ListWhatIfForecastsCommandOutput extends ListWhatIfForecastsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListWhatIfForecastsRequest
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
 * const command = new ListWhatIfForecastsCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatIfForecastsResponse
 * //   WhatIfForecasts: [ // WhatIfForecasts
 * //     { // WhatIfForecastSummary
 * //       WhatIfForecastArn: "STRING_VALUE",
 * //       WhatIfForecastName: "STRING_VALUE",
 * //       WhatIfAnalysisArn: "STRING_VALUE",
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
 * @param ListWhatIfForecastsCommandInput - {@link ListWhatIfForecastsCommandInput}
 * @returns {@link ListWhatIfForecastsCommandOutput}
 * @see {@link ListWhatIfForecastsCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class ListWhatIfForecastsCommand extends $Command
  .classBuilder<
    ListWhatIfForecastsCommandInput,
    ListWhatIfForecastsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListWhatIfForecasts", {})
  .n("ForecastClient", "ListWhatIfForecastsCommand")
  .sc(ListWhatIfForecasts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatIfForecastsRequest;
      output: ListWhatIfForecastsResponse;
    };
    sdk: {
      input: ListWhatIfForecastsCommandInput;
      output: ListWhatIfForecastsCommandOutput;
    };
  };
}
