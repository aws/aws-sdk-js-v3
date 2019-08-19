import {
  _ContentTypeProfile,
  _UnmarshalledContentTypeProfile
} from "./_ContentTypeProfile";

/**
 * <p>Field-level encryption content type-profile. </p>
 */
export interface _ContentTypeProfiles {
  /**
   * <p>The number of field-level encryption content type-profile mappings. </p>
   */
  Quantity: number;

  /**
   * <p>Items in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<_ContentTypeProfile> | Iterable<_ContentTypeProfile>;
}

export interface _UnmarshalledContentTypeProfiles extends _ContentTypeProfiles {
  /**
   * <p>Items in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<_UnmarshalledContentTypeProfile>;
}
