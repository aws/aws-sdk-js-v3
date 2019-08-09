/**
 * <p/>
 */
export interface _LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.</p>
   */
  Date?: Date | string | number;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired; if set to false the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

export interface _UnmarshalledLifecycleExpiration extends _LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.</p>
   */
  Date?: Date;
}
