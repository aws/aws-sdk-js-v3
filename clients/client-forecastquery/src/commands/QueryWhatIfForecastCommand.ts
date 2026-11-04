// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QueryWhatIfForecastRequest, QueryWhatIfForecastResponse } from "../models/models_0";
import { QueryWhatIfForecast$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a what-if forecast.
 *
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
 *
 * The value is invalid or is too long.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token is not valid. Tokens expire after 24 hours.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find that resource. Check the information that you've provided and try again.
 *
 * @throws {@link ForecastqueryServiceException}
 *
 * Base exception class for all service exceptions from Forecastquery service.
 *
 * @public
 */
export class QueryWhatIfForecastCommand extends command<QueryWhatIfForecastCommandInput, QueryWhatIfForecastCommandOutput>(
  _ep0,
  _mw0,
  "QueryWhatIfForecast",
  QueryWhatIfForecast$
) {
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
