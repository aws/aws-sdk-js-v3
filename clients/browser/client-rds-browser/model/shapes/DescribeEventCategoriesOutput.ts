import { _EventCategoriesMapList } from "./_EventCategoriesMapList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventCategoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventCategoriesMapList: {
      shape: _EventCategoriesMapList
    }
  }
};
