import { _HierarchyPath, _UnmarshalledHierarchyPath } from "./_HierarchyPath";

/**
 * <p>A <code>HierarchyGroup</code> object that contains information about a hierarchy group in your Amazon Connect instance.</p>
 */
export interface _HierarchyGroup {
  /**
   * <p>The identifier for the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group in your instance.</p>
   */
  Name?: string;

  /**
   * <p>The identifier for the level in the hierarchy group.</p>
   */
  LevelId?: string;

  /**
   * <p>A <code>HierarchyPath</code> object that contains information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: _HierarchyPath;
}

export interface _UnmarshalledHierarchyGroup extends _HierarchyGroup {
  /**
   * <p>A <code>HierarchyPath</code> object that contains information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: _UnmarshalledHierarchyPath;
}
