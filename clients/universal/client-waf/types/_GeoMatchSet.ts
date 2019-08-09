import {
  _GeoMatchConstraint,
  _UnmarshalledGeoMatchConstraint
} from "./_GeoMatchConstraint";

/**
 * <p>Contains one or more countries that AWS WAF will search for.</p>
 */
export interface _GeoMatchSet {
  /**
   * <p>The <code>GeoMatchSetId</code> for an <code>GeoMatchSet</code>. You use <code>GeoMatchSetId</code> to get information about a <code>GeoMatchSet</code> (see <a>GeoMatchSet</a>), update a <code>GeoMatchSet</code> (see <a>UpdateGeoMatchSet</a>), insert a <code>GeoMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>GeoMatchSet</code> from AWS WAF (see <a>DeleteGeoMatchSet</a>).</p> <p> <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.</p>
   */
  GeoMatchSetId: string;

  /**
   * <p>A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>An array of <a>GeoMatchConstraint</a> objects, which contain the country that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraints:
    | Array<_GeoMatchConstraint>
    | Iterable<_GeoMatchConstraint>;
}

export interface _UnmarshalledGeoMatchSet extends _GeoMatchSet {
  /**
   * <p>An array of <a>GeoMatchConstraint</a> objects, which contain the country that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraints: Array<_UnmarshalledGeoMatchConstraint>;
}
