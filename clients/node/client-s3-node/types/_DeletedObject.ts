/**
 * _DeletedObject shape
 */
export interface _DeletedObject {
  /**
   * _ObjectKey shape
   */
  Key?: string;

  /**
   * _ObjectVersionId shape
   */
  VersionId?: string;

  /**
   * _DeleteMarker shape
   */
  DeleteMarker?: boolean;

  /**
   * _DeleteMarkerVersionId shape
   */
  DeleteMarkerVersionId?: string;
}

export type _UnmarshalledDeletedObject = _DeletedObject;
