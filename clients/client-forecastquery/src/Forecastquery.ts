// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  QueryForecastCommand,
  QueryForecastCommandInput,
  QueryForecastCommandOutput,
} from "./commands/QueryForecastCommand";
import {
  QueryWhatIfForecastCommand,
  QueryWhatIfForecastCommandInput,
  QueryWhatIfForecastCommandOutput,
} from "./commands/QueryWhatIfForecastCommand";
import { ForecastqueryClient, ForecastqueryClientConfig } from "./ForecastqueryClient";

const commands = {
  QueryForecastCommand,
  QueryWhatIfForecastCommand,
};

export interface Forecastquery {
  /**
   * @see {@link QueryForecastCommand}
   */
  queryForecast(args: QueryForecastCommandInput, options?: __HttpHandlerOptions): Promise<QueryForecastCommandOutput>;
  queryForecast(args: QueryForecastCommandInput, cb: (err: any, data?: QueryForecastCommandOutput) => void): void;
  queryForecast(
    args: QueryForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryWhatIfForecastCommand}
   */
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryWhatIfForecastCommandOutput>;
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class Forecastquery extends ForecastqueryClient implements Forecastquery {}
createAggregatedClient(commands, Forecastquery);
