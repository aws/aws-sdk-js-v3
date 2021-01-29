import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The value is invalid or is too long.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface QueryForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast to query.</p>
   */
  ForecastArn: string | undefined;

  /**
   * <p>The start date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T08:00:00.</p>
   */
  StartDate?: string;

  /**
   * <p>The end date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss
   *       (ISO 8601 format). For example, 2015-01-01T20:00:00. </p>
   */
  EndDate?: string;

  /**
   * <p>The filtering criteria to apply when retrieving the forecast. For example, to get the
   *       forecast for <code>client_21</code> in the electricity usage dataset, specify the
   *       following:</p>
   *          <p>
   *             <code>{"item_id" : "client_21"}</code>
   *          </p>
   *
   *
   *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
   */
  Filters: { [key: string]: string } | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace QueryForecastRequest {
  export const filterSensitiveLog = (obj: QueryForecastRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The forecast value for a specific date. Part of the <a>Forecast</a>
 *       object.</p>
 */
export interface DataPoint {
  /**
   * <p>The timestamp of the specific forecast.</p>
   */
  Timestamp?: string;

  /**
   * <p>The forecast value.</p>
   */
  Value?: number;
}

export namespace DataPoint {
  export const filterSensitiveLog = (obj: DataPoint): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.</p>
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
   */
  Predictions?: { [key: string]: DataPoint[] };
}

export namespace Forecast {
  export const filterSensitiveLog = (obj: Forecast): any => ({
    ...obj,
  });
}

export interface QueryForecastResponse {
  /**
   * <p>The forecast.</p>
   */
  Forecast?: Forecast;
}

export namespace QueryForecastResponse {
  export const filterSensitiveLog = (obj: QueryForecastResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}
