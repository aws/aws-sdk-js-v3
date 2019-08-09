import { _HierarchyLevel } from "./_HierarchyLevel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HierarchyStructure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LevelOne: {
      shape: _HierarchyLevel
    },
    LevelTwo: {
      shape: _HierarchyLevel
    },
    LevelThree: {
      shape: _HierarchyLevel
    },
    LevelFour: {
      shape: _HierarchyLevel
    },
    LevelFive: {
      shape: _HierarchyLevel
    }
  }
};
