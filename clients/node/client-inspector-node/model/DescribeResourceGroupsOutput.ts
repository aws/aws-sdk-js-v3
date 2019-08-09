import { _ResourceGroupList } from "./_ResourceGroupList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourceGroupsOutput: _Structure_ = {
  type: "structure",
  required: ["resourceGroups", "failedItems"],
  members: {
    resourceGroups: {
      shape: _ResourceGroupList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
