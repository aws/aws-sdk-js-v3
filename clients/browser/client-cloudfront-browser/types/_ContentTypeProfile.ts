/**
 * <p>A field-level encryption content type profile. </p>
 */
export interface _ContentTypeProfile {
  /**
   * <p>The format for a field-level encryption content type-profile mapping. </p>
   */
  Format: "URLEncoded" | string;

  /**
   * <p>The profile ID for a field-level encryption content type-profile mapping. </p>
   */
  ProfileId?: string;

  /**
   * <p>The content type for a field-level encryption content type-profile mapping. </p>
   */
  ContentType: string;
}

export type _UnmarshalledContentTypeProfile = _ContentTypeProfile;
