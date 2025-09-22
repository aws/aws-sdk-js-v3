// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListWhatIfAnalysesRequest, ListWhatIfAnalysesResponse } from "../models/models_0";
import { ListWhatIfAnalyses } from "../schemas/schemas_22_ListWhatIfAnalyses";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.</p>
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
export class ListWhatIfAnalysesCommand extends $Command
  .classBuilder<
    ListWhatIfAnalysesCommandInput,
    ListWhatIfAnalysesCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListWhatIfAnalyses", {})
  .n("ForecastClient", "ListWhatIfAnalysesCommand")
  .sc(ListWhatIfAnalyses)
  .build() {
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
