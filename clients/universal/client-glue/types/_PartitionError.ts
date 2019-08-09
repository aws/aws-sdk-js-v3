import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * <p>Contains information about a partition error.</p>
 */
export interface _PartitionError {
  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues?: Array<string> | Iterable<string>;

  /**
   * <p>Details about the partition error.</p>
   */
  ErrorDetail?: _ErrorDetail;
}

export interface _UnmarshalledPartitionError extends _PartitionError {
  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues?: Array<string>;

  /**
   * <p>Details about the partition error.</p>
   */
  ErrorDetail?: _UnmarshalledErrorDetail;
}
