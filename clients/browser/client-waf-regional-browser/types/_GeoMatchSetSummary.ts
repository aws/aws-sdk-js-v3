/**
 * <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p>
 */
export interface _GeoMatchSetSummary {
  /**
   * <p>The <code>GeoMatchSetId</code> for an <a>GeoMatchSet</a>. You can use <code>GeoMatchSetId</code> in a <a>GetGeoMatchSet</a> request to get detailed information about an <a>GeoMatchSet</a>.</p>
   */
  GeoMatchSetId: string;

  /**
   * <p>A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.</p>
   */
  Name: string;
}

export type _UnmarshalledGeoMatchSetSummary = _GeoMatchSetSummary;
