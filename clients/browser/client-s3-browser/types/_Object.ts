import { _Owner, _UnmarshalledOwner } from "./_Owner";

/**
 * <p/>
 */
export interface _Object {
  /**
   * <p/>
   */
  Key?: string;

  /**
   * <p/>
   */
  LastModified?: Date | string | number;

  /**
   * <p/>
   */
  ETag?: string;

  /**
   * <p/>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "GLACIER"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p/>
   */
  Owner?: _Owner;
}

export interface _UnmarshalledObject extends _Object {
  /**
   * <p/>
   */
  LastModified?: Date;

  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;
}
