import { DescribeSnapshotSchedulesInput } from "./DescribeSnapshotSchedulesInput";
import { DescribeSnapshotSchedulesOutput } from "./DescribeSnapshotSchedulesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSnapshotSchedules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshotSchedules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotSchedulesInput
  },
  output: {
    shape: DescribeSnapshotSchedulesOutput,
    resultWrapper: "DescribeSnapshotSchedulesResult"
  },
  errors: []
};
