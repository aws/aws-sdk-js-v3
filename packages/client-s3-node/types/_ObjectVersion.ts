import { _Owner, _UnmarshalledOwner } from "./_Owner";

/**
 * _ObjectVersion shape
 */
export interface _ObjectVersion {
  /**
   * _ETag shape
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: "STANDARD" | string;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date | string | number;

  /**
   * _Owner shape
   */
  Owner?: _Owner;
}

export interface _UnmarshalledObjectVersion extends _ObjectVersion {
  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * _Owner shape
   */
  Owner?: _UnmarshalledOwner;
}
