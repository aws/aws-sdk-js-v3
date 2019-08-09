import { _ImportImageTaskList } from "./_ImportImageTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImportImageTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImportImageTasks: {
      shape: _ImportImageTaskList,
      locationName: "importImageTaskSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
