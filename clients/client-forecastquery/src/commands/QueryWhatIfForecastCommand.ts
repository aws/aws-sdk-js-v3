// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import { QueryWhatIfForecastRequest, QueryWhatIfForecastResponse } from "../models/models_0";
import { de_QueryWhatIfForecastCommand, se_QueryWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryWhatIfForecastCommand}.
 */
export interface QueryWhatIfForecastCommandInput extends QueryWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link QueryWhatIfForecastCommand}.
 */
export interface QueryWhatIfForecastCommandOutput extends QueryWhatIfForecastResponse, __MetadataBearer {}

/**
 * <p>Retrieves a what-if forecast.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryWhatIfForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryWhatIfForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * // import type { ForecastqueryClientConfig } from "@aws-sdk/client-forecastquery";
 * const config = {}; // type is ForecastqueryClientConfig
 * const client = new ForecastqueryClient(config);
 * const input = { // QueryWhatIfForecastRequest
 *   WhatIfForecastArn: "STRING_VALUE", // required
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Filters: { // Filters // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // { // QueryWhatIfForecastResponse
 * //   Forecast: { // Forecast
 * //     Predictions: { // Predictions
 * //       "<keys>": [ // TimeSeries
 * //         { // DataPoint
 * //           Timestamp: "STRING_VALUE",
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param QueryWhatIfForecastCommandInput - {@link QueryWhatIfForecastCommandInput}
 * @returns {@link QueryWhatIfForecastCommandOutput}
 * @see {@link QueryWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link QueryWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The value is invalid or is too long.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 *
 * @throws {@link ForecastqueryServiceException}
 * <p>Base exception class for all service exceptions from Forecastquery service.</p>
 *
 *
 * @public
 */
export class QueryWhatIfForecastCommand extends $Command
  .classBuilder<
    QueryWhatIfForecastCommandInput,
    QueryWhatIfForecastCommandOutput,
    ForecastqueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastqueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecastRuntime", "QueryWhatIfForecast", {})
  .n("ForecastqueryClient", "QueryWhatIfForecastCommand")
  .f(void 0, void 0)
  .ser(se_QueryWhatIfForecastCommand)
  .de(de_QueryWhatIfForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryWhatIfForecastRequest;
      output: QueryWhatIfForecastResponse;
    };
    sdk: {
      input: QueryWhatIfForecastCommandInput;
      output: QueryWhatIfForecastCommandOutput;
    };
  };
}
