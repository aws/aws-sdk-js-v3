/**
 * <p>A <code>HierarchyLevel</code> object that contains information about the levels in a hierarchy group, including ARN, Id, and Name.</p>
 */
export interface _HierarchyLevel {
  /**
   * <p>The identifier for the hierarchy group level.</p>
   */
  Id?: string;

  /**
   * <p>The ARN for the hierarchy group level.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group level.</p>
   */
  Name?: string;
}

export type _UnmarshalledHierarchyLevel = _HierarchyLevel;
