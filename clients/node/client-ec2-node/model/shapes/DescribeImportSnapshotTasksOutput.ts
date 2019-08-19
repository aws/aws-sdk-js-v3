import { _ImportSnapshotTaskList } from "./_ImportSnapshotTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImportSnapshotTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImportSnapshotTasks: {
      shape: _ImportSnapshotTaskList,
      locationName: "importSnapshotTaskSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
