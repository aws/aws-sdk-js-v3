/**
 * <p>Filters for the association execution.</p>
 */
export interface _AssociationExecutionTargetsFilter {
  /**
   * <p>The key value used in the request.</p>
   */
  Key: "Status" | "ResourceId" | "ResourceType" | string;

  /**
   * <p>The value specified for the key.</p>
   */
  Value: string;
}

export type _UnmarshalledAssociationExecutionTargetsFilter = _AssociationExecutionTargetsFilter;
