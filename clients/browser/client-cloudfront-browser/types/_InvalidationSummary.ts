/**
 * <p>A summary of an invalidation request.</p>
 */
export interface _InvalidationSummary {
  /**
   * <p>The unique ID for an invalidation request.</p>
   */
  Id: string;

  /**
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date | string | number;

  /**
   * <p>The status of an invalidation request.</p>
   */
  Status: string;
}

export interface _UnmarshalledInvalidationSummary extends _InvalidationSummary {
  /**
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date;
}
