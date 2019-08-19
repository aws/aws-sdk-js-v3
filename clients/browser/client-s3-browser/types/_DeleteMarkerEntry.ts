import { _Owner, _UnmarshalledOwner } from "./_Owner";

/**
 * <p/>
 */
export interface _DeleteMarkerEntry {
  /**
   * <p/>
   */
  Owner?: _Owner;

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
}

export interface _UnmarshalledDeleteMarkerEntry extends _DeleteMarkerEntry {
  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;
}
