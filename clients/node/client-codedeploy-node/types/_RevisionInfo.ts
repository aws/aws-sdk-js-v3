import {
  _RevisionLocation,
  _UnmarshalledRevisionLocation
} from "./_RevisionLocation";
import {
  _GenericRevisionInfo,
  _UnmarshalledGenericRevisionInfo
} from "./_GenericRevisionInfo";

/**
 * <p>Information about an application revision.</p>
 */
export interface _RevisionInfo {
  /**
   * <p>Information about the location and type of an application revision.</p>
   */
  revisionLocation?: _RevisionLocation;

  /**
   * <p>Information about an application revision, including usage details and associated deployment groups.</p>
   */
  genericRevisionInfo?: _GenericRevisionInfo;
}

export interface _UnmarshalledRevisionInfo extends _RevisionInfo {
  /**
   * <p>Information about the location and type of an application revision.</p>
   */
  revisionLocation?: _UnmarshalledRevisionLocation;

  /**
   * <p>Information about an application revision, including usage details and associated deployment groups.</p>
   */
  genericRevisionInfo?: _UnmarshalledGenericRevisionInfo;
}
