import {
  _QueryArgProfile,
  _UnmarshalledQueryArgProfile
} from "./_QueryArgProfile";

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface _QueryArgProfiles {
  /**
   * <p>Number of profiles for query argument-profile mapping for field-level encryption.</p>
   */
  Quantity: number;

  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   */
  Items?: Array<_QueryArgProfile> | Iterable<_QueryArgProfile>;
}

export interface _UnmarshalledQueryArgProfiles extends _QueryArgProfiles {
  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   */
  Items?: Array<_UnmarshalledQueryArgProfile>;
}
