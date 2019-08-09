import { DescribeImportSnapshotTasksInput } from "./DescribeImportSnapshotTasksInput";
import { DescribeImportSnapshotTasksOutput } from "./DescribeImportSnapshotTasksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeImportSnapshotTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImportSnapshotTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImportSnapshotTasksInput
  },
  output: {
    shape: DescribeImportSnapshotTasksOutput
  },
  errors: []
};
