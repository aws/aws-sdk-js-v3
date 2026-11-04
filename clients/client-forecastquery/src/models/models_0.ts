// smithy-typescript generated code
/**
 * @public
 */
export interface QueryForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the forecast to query.
   *
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * The start date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The end date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The filtering criteria to apply when retrieving the forecast. For example, to get the forecast for `client_21` in the electricity usage dataset, specify the following:
   *
   * `\{"item_id" : "client_21"\}`
   *
   *
   *
   *
   * To get the full forecast, use the [CreateForecastExportJob](https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html) operation.
   *
   * @public
   */
  Filters: Record<string, string> | undefined;

  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The forecast value for a specific date. Part of the Forecast object.
 *
 * @public
 */
export interface DataPoint {
  /**
   * The timestamp of the specific forecast.
   *
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * The forecast value.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Provides information about a forecast. Returned as part of the QueryForecast response.
 *
 * @public
 */
export interface Forecast {
  /**
   * The forecast.
   *
   * The *string* of the string-to-array map is one of the following values:
   *
   * - p10
   * - p50
   * - p90
   *
   * The default setting is `["0.1", "0.5", "0.9"]`. Use the optional `ForecastTypes` parameter of the [CreateForecast](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html) operation to change the values. The values will vary depending on how this is set, with a minimum of `1` and a maximum of `5.`
   *
   * @public
   */
  Predictions?: Record<string, DataPoint[]> | undefined;
}

/**
 * @public
 */
export interface QueryForecastResponse {
  /**
   * The forecast.
   *
   * @public
   */
  Forecast?: Forecast | undefined;
}

/**
 * @public
 */
export interface QueryWhatIfForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast to query.
   *
   * @public
   */
  WhatIfForecastArn: string | undefined;

  /**
   * The start date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The end date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The filtering criteria to apply when retrieving the forecast. For example, to get the forecast for `client_21` in the electricity usage dataset, specify the following:
   *
   * `\{"item_id" : "client_21"\}`
   *
   * To get the full what-if forecast, use the [CreateForecastExportJob](https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateWhatIfForecastExport.html) operation.
   *
   * @public
   */
  Filters: Record<string, string> | undefined;

  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface QueryWhatIfForecastResponse {
  /**
   * Provides information about a forecast. Returned as part of the QueryForecast response.
   *
   * @public
   */
  Forecast?: Forecast | undefined;
}
