import { _HierarchyGroupSummary } from "./_HierarchyGroupSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HierarchyPath: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LevelOne: {
      shape: _HierarchyGroupSummary
    },
    LevelTwo: {
      shape: _HierarchyGroupSummary
    },
    LevelThree: {
      shape: _HierarchyGroupSummary
    },
    LevelFour: {
      shape: _HierarchyGroupSummary
    },
    LevelFive: {
      shape: _HierarchyGroupSummary
    }
  }
};
