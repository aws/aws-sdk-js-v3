import {
  _GeoMatchConstraint,
  _UnmarshalledGeoMatchConstraint
} from "./_GeoMatchConstraint";

/**
 * <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p>
 */
export interface _GeoMatchSetUpdate {
  /**
   * <p>Specifies whether to insert or delete a country with <a>UpdateGeoMatchSet</a>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>The country from which web requests originate that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraint: _GeoMatchConstraint;
}

export interface _UnmarshalledGeoMatchSetUpdate extends _GeoMatchSetUpdate {
  /**
   * <p>The country from which web requests originate that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraint: _UnmarshalledGeoMatchConstraint;
}
