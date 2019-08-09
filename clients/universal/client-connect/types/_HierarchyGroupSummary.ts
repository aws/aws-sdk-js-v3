/**
 * <p>A <code>HierarchyGroupSummary</code> object that contains information about the hierarchy group, including ARN, Id, and Name.</p>
 */
export interface _HierarchyGroupSummary {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The ARN for the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;
}

export type _UnmarshalledHierarchyGroupSummary = _HierarchyGroupSummary;
