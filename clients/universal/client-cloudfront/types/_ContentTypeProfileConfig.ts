import {
  _ContentTypeProfiles,
  _UnmarshalledContentTypeProfiles
} from "./_ContentTypeProfiles";

/**
 * <p>The configuration for a field-level encryption content type-profile mapping. </p>
 */
export interface _ContentTypeProfileConfig {
  /**
   * <p>The setting in a field-level encryption content type-profile mapping that specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown. </p>
   */
  ForwardWhenContentTypeIsUnknown: boolean;

  /**
   * <p>The configuration for a field-level encryption content type-profile. </p>
   */
  ContentTypeProfiles?: _ContentTypeProfiles;
}

export interface _UnmarshalledContentTypeProfileConfig
  extends _ContentTypeProfileConfig {
  /**
   * <p>The configuration for a field-level encryption content type-profile. </p>
   */
  ContentTypeProfiles?: _UnmarshalledContentTypeProfiles;
}
