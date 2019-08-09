import {
  _CustomErrorResponse,
  _UnmarshalledCustomErrorResponse
} from "./_CustomErrorResponse";

/**
 * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _CustomErrorResponses {
  /**
   * <p>The number of HTTP status codes for which you want to specify a custom error page and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP status code for which you want to specify a custom error page and/or a caching duration. </p>
   */
  Items?: Array<_CustomErrorResponse> | Iterable<_CustomErrorResponse>;
}

export interface _UnmarshalledCustomErrorResponses
  extends _CustomErrorResponses {
  /**
   * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP status code for which you want to specify a custom error page and/or a caching duration. </p>
   */
  Items?: Array<_UnmarshalledCustomErrorResponse>;
}
