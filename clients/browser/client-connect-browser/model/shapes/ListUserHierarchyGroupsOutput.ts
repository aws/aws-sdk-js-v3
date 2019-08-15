import { _HierarchyGroupSummaryList } from "./_HierarchyGroupSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserHierarchyGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserHierarchyGroupSummaryList: {
      shape: _HierarchyGroupSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
