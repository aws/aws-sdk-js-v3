import {
  _GeoRestriction,
  _UnmarshalledGeoRestriction
} from "./_GeoRestriction";

/**
 * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
 */
export interface _Restrictions {
  /**
   * <p>A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
   */
  GeoRestriction: _GeoRestriction;
}

export interface _UnmarshalledRestrictions extends _Restrictions {
  /**
   * <p>A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
   */
  GeoRestriction: _UnmarshalledGeoRestriction;
}
