import {
  _OriginCustomHeader,
  _UnmarshalledOriginCustomHeader
} from "./_OriginCustomHeader";

/**
 * <p>A complex type that contains the list of Custom Headers for each origin. </p>
 */
export interface _CustomHeaders {
  /**
   * <p>The number of custom headers, if any, for this distribution.</p>
   */
  Quantity: number;

  /**
   * <p> <b>Optional</b>: A list that contains one <code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: Array<_OriginCustomHeader> | Iterable<_OriginCustomHeader>;
}

export interface _UnmarshalledCustomHeaders extends _CustomHeaders {
  /**
   * <p> <b>Optional</b>: A list that contains one <code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: Array<_UnmarshalledOriginCustomHeader>;
}
