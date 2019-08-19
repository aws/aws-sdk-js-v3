import {
  _HierarchyGroupSummary,
  _UnmarshalledHierarchyGroupSummary
} from "./_HierarchyGroupSummary";

/**
 * <p>A <code>HierarchyPath</code> object that contains information about the levels of the hierarchy group.</p>
 */
export interface _HierarchyPath {
  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelOne?: _HierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelTwo?: _HierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelThree?: _HierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelFour?: _HierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelFive?: _HierarchyGroupSummary;
}

export interface _UnmarshalledHierarchyPath extends _HierarchyPath {
  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelOne?: _UnmarshalledHierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelTwo?: _UnmarshalledHierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelThree?: _UnmarshalledHierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelFour?: _UnmarshalledHierarchyGroupSummary;

  /**
   * <p>A <code>HierarchyGroupSummary</code> object that contains information about the level of the hierarchy group, including ARN, Id, and Name.</p>
   */
  LevelFive?: _UnmarshalledHierarchyGroupSummary;
}
