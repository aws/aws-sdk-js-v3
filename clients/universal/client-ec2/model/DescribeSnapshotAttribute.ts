import { DescribeSnapshotAttributeInput } from "./DescribeSnapshotAttributeInput";
import { DescribeSnapshotAttributeOutput } from "./DescribeSnapshotAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSnapshotAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshotAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotAttributeInput
  },
  output: {
    shape: DescribeSnapshotAttributeOutput
  },
  errors: []
};
