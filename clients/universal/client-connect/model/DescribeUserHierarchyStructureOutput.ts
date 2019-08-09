import { _HierarchyStructure } from "./_HierarchyStructure";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserHierarchyStructureOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HierarchyStructure: {
      shape: _HierarchyStructure
    }
  }
};
