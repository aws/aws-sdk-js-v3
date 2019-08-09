import {
  _QueryArgProfiles,
  _UnmarshalledQueryArgProfiles
} from "./_QueryArgProfiles";

/**
 * <p>Configuration for query argument-profile mapping for field-level encryption.</p>
 */
export interface _QueryArgProfileConfig {
  /**
   * <p>Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.</p>
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean;

  /**
   * <p>Profiles specified for query argument-profile mapping for field-level encryption.</p>
   */
  QueryArgProfiles?: _QueryArgProfiles;
}

export interface _UnmarshalledQueryArgProfileConfig
  extends _QueryArgProfileConfig {
  /**
   * <p>Profiles specified for query argument-profile mapping for field-level encryption.</p>
   */
  QueryArgProfiles?: _UnmarshalledQueryArgProfiles;
}
