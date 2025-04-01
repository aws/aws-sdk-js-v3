// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ForecastqueryServiceException as __BaseException } from "./ForecastqueryServiceException";

/**
 * <p>The value is invalid or is too long.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface QueryForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast to query.</p>
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * <p>The start date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T08:00:00.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The end date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T20:00:00. </p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The filtering criteria to apply when retrieving the forecast. For example, to get the
   *       forecast for <code>client_21</code> in the electricity usage dataset, specify the
   *       following:</p>
   *          <p>
   *             <code>\{"item_id" : "client_21"\}</code>
   *          </p>
   *
   *
   *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
   * @public
   */
  Filters: Record<string, string> | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The forecast value for a specific date. Part of the <a>Forecast</a>
 *       object.</p>
 * @public
 */
export interface DataPoint {
  /**
   * <p>The timestamp of the specific forecast.</p>
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * <p>The forecast value.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.</p>
 * @public
 */
export interface Forecast {
  /**
   * <p>The forecast.</p>
   *          <p>The <i>string</i> of the string-to-array map is one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>p10</p>
   *             </li>
   *             <li>
   *                <p>p50</p>
   *             </li>
   *             <li>
   *                <p>p90</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <code>["0.1", "0.5", "0.9"]</code>. Use the optional <code>ForecastTypes</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html">CreateForecast</a> operation to change the values. The values will vary depending on how this is set, with a minimum of <code>1</code> and a maximum of <code>5.</code>
   *          </p>
   * @public
   */
  Predictions?: Record<string, DataPoint[]> | undefined;
}

/**
 * @public
 */
export interface QueryForecastResponse {
  /**
   * <p>The forecast.</p>
   * @public
   */
  Forecast?: Forecast | undefined;
}

/**
 * <p>The specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface QueryWhatIfForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast to query.</p>
   * @public
   */
  WhatIfForecastArn: string | undefined;

  /**
   * <p>The start date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T08:00:00.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The end date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T20:00:00. </p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The filtering criteria to apply when retrieving the forecast. For example, to get the
   *       forecast for <code>client_21</code> in the electricity usage dataset, specify the
   *       following:</p>
   *          <p>
   *             <code>\{"item_id" : "client_21"\}</code>
   *          </p>
   *          <p>To get the full what-if forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateWhatIfForecastExport.html">CreateForecastExportJob</a> operation.</p>
   * @public
   */
  Filters: Record<string, string> | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *       <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface QueryWhatIfForecastResponse {
  /**
   * <p>Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.</p>
   * @public
   */
  Forecast?: Forecast | undefined;
}
