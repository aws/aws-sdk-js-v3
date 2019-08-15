import { _EventCategoryGroupList } from "./_EventCategoryGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventCategoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventCategoryGroupList: {
      shape: _EventCategoryGroupList
    }
  }
};
