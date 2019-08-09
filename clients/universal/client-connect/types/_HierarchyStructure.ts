import {
  _HierarchyLevel,
  _UnmarshalledHierarchyLevel
} from "./_HierarchyLevel";

/**
 * <p>A <code>HierarchyStructure</code> object that contains information about the hierarchy group structure.</p>
 */
export interface _HierarchyStructure {
  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelOne?: _HierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelTwo?: _HierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelThree?: _HierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelFour?: _HierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelFive?: _HierarchyLevel;
}

export interface _UnmarshalledHierarchyStructure extends _HierarchyStructure {
  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelOne?: _UnmarshalledHierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelTwo?: _UnmarshalledHierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelThree?: _UnmarshalledHierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelFour?: _UnmarshalledHierarchyLevel;

  /**
   * <p>A <code>HierarchyLevel</code> object that contains information about the hierarchy group level.</p>
   */
  LevelFive?: _UnmarshalledHierarchyLevel;
}
