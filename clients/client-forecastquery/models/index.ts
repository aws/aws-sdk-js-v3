import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>The forecast value for a specific date. Part of the
 *       <a>Forecast</a> object.</p>
 *
 */
export interface DataPoint {
  __type?: "DataPoint";
  /**
   *
   *          <p>The timestamp of the specific forecast.</p>
   *
   */
  Timestamp?: string;

  /**
   *
   *          <p>The forecast value.</p>
   *
   */
  Value?: number;
}

export namespace DataPoint {
  export function isa(o: any): o is DataPoint {
    return _smithy.isa(o, "DataPoint");
  }
}

/**
 *
 *          <p>Provides information about a forecast. Returned as part of the
 *       <a>QueryForecast</a> response.</p>
 *
 */
export interface Forecast {
  __type?: "Forecast";
  /**
   *
   *          <p>The forecast.</p>
   *          <p>The <i>string</i> of the string-to-array map is one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>mean</p>
   *             </li>
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
   *
   */
  Predictions?: { [key: string]: Array<DataPoint> };
}

export namespace Forecast {
  export function isa(o: any): o is Forecast {
    return _smithy.isa(o, "Forecast");
  }
}

/**
 *
 *          <p>The value is invalid or is too long.</p>
 *
 */
export interface InvalidInputException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInputException";
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return _smithy.isa(o, "InvalidInputException");
  }
}

/**
 *
 *          <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 *          <p>The limit on the number of requests per second has been exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface QueryForecastRequest {
  __type?: "QueryForecastRequest";
  /**
   *
   *          <p>The end date for the forecast. Specify the date using this format:
   *       yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00.
   *     </p>
   *
   */
  EndDate?: string;

  /**
   *
   *          <p>The filtering criteria to apply when retrieving the forecast. For example, to get the
   *       forecast for <code>client_21</code> in the electricity usage dataset, specify the following:</p>
   *          <p>
   *             <code>{"item_id" : "client_21"}</code>
   *          </p>
   *
   *
   *          <p>To get the full forecast, use the  operation.</p>
   *
   */
  Filters: { [key: string]: string } | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the forecast to query.</p>
   *
   */
  ForecastArn: string | undefined;

  /**
   *
   *          <p>If the result of the previous request was truncated, the response includes a
   *       <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The start date for the forecast. Specify the date using this format:
   *       yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.</p>
   *
   */
  StartDate?: string;
}

export namespace QueryForecastRequest {
  export function isa(o: any): o is QueryForecastRequest {
    return _smithy.isa(o, "QueryForecastRequest");
  }
}

export interface QueryForecastResponse extends $MetadataBearer {
  __type?: "QueryForecastResponse";
  /**
   *
   *          <p>The forecast.</p>
   *
   */
  Forecast?: Forecast;
}

export namespace QueryForecastResponse {
  export function isa(o: any): o is QueryForecastResponse {
    return _smithy.isa(o, "QueryForecastResponse");
  }
}

/**
 *
 *          <p>The specified resource is in use.</p>
 *
 */
export interface ResourceInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceInUseException";
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return _smithy.isa(o, "ResourceInUseException");
  }
}

/**
 *
 *          <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}
