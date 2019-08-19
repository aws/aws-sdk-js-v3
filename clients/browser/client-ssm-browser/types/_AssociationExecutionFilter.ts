/**
 * <p>Filters used in the request.</p>
 */
export interface _AssociationExecutionFilter {
  /**
   * <p>The key value used in the request.</p>
   */
  Key: "ExecutionId" | "Status" | "CreatedTime" | string;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string;

  /**
   * <p>The filter type specified in the request.</p>
   */
  Type: "EQUAL" | "LESS_THAN" | "GREATER_THAN" | string;
}

export type _UnmarshalledAssociationExecutionFilter = _AssociationExecutionFilter;
