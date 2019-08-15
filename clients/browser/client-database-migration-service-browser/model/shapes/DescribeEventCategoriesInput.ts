import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventCategoriesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceType: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
    }
  }
};
