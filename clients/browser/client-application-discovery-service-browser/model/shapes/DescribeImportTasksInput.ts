import { _DescribeImportTasksFilterList } from "./_DescribeImportTasksFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImportTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _DescribeImportTasksFilterList
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
