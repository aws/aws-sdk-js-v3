/**
 * _Error shape
 */
export interface _Error {
  /**
   * _ObjectKey shape
   */
  Key?: string;

  /**
   * _ObjectVersionId shape
   */
  VersionId?: string;

  /**
   * _Code shape
   */
  Code?: string;

  /**
   * _Message shape
   */
  Message?: string;
}

export type _UnmarshalledError = _Error;
