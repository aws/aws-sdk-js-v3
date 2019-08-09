/**
 * <p/>
 */
export interface _Bucket {
  /**
   * <p>The name of the bucket.</p>
   */
  Name?: string;

  /**
   * <p>Date the bucket was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledBucket extends _Bucket {
  /**
   * <p>Date the bucket was created.</p>
   */
  CreationDate?: Date;
}
