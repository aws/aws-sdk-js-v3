// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type QueryForecastCommandInput,
  type QueryForecastCommandOutput,
  QueryForecastCommand,
} from "./commands/QueryForecastCommand";
import {
  type QueryWhatIfForecastCommandInput,
  type QueryWhatIfForecastCommandOutput,
  QueryWhatIfForecastCommand,
} from "./commands/QueryWhatIfForecastCommand";
import { ForecastqueryClient } from "./ForecastqueryClient";

const commands = {
  QueryForecastCommand,
  QueryWhatIfForecastCommand,
};

/**
 * @public
 */
export interface ForecastqueryRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Forecastquery {
  /**
   * @see {@link QueryForecastCommand}
   */
  queryForecast(
    args: QueryForecastCommandInput,
    options?: ForecastqueryRequestOptions
  ): Promise<QueryForecastCommandOutput>;
  queryForecast(
    args: QueryForecastCommandInput,
    cb: (err: any, data?: QueryForecastCommandOutput) => void
  ): void;
  queryForecast(
    args: QueryForecastCommandInput,
    options: ForecastqueryRequestOptions,
    cb: (err: any, data?: QueryForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryWhatIfForecastCommand}
   */
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options?: ForecastqueryRequestOptions
  ): Promise<QueryWhatIfForecastCommandOutput>;
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
  queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options: ForecastqueryRequestOptions,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
}

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 * @public
 */
export class Forecastquery extends ForecastqueryClient implements Forecastquery {}
createAggregatedClient(commands, Forecastquery);
