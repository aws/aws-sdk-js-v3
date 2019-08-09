import {
  _InvalidationBatch,
  _UnmarshalledInvalidationBatch
} from "./_InvalidationBatch";

/**
 * <p>An invalidation. </p>
 */
export interface _Invalidation {
  /**
   * <p>The identifier for the invalidation request. For example: <code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string;

  /**
   * <p>The status of the invalidation request. When the invalidation batch is finished, the status is <code>Completed</code>.</p>
   */
  Status: string;

  /**
   * <p>The date and time the invalidation request was first made. </p>
   */
  CreateTime: Date | string | number;

  /**
   * <p>The current invalidation information for the batch request. </p>
   */
  InvalidationBatch: _InvalidationBatch;
}

export interface _UnmarshalledInvalidation extends _Invalidation {
  /**
   * <p>The date and time the invalidation request was first made. </p>
   */
  CreateTime: Date;

  /**
   * <p>The current invalidation information for the batch request. </p>
   */
  InvalidationBatch: _UnmarshalledInvalidationBatch;
}
