import { _ImportTaskList } from "./_ImportTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImportTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    tasks: {
      shape: _ImportTaskList
    }
  }
};
