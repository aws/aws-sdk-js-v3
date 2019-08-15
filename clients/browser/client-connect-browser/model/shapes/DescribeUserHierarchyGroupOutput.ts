import { _HierarchyGroup } from "./_HierarchyGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserHierarchyGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HierarchyGroup: {
      shape: _HierarchyGroup
    }
  }
};
