/**
 * <p>Represents the amount of provisioned throughput capacity consumed on a table or an index.</p>
 */
export interface _Capacity {
  /**
   * <p>The total number of read capacity units consumed on a table or an index.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The total number of write capacity units consumed on a table or an index.</p>
   */
  WriteCapacityUnits?: number;

  /**
   * <p>The total number of capacity units consumed on a table or an index.</p>
   */
  CapacityUnits?: number;
}

export type _UnmarshalledCapacity = _Capacity;
