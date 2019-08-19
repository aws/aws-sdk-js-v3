import { DescribeSnapshotAttributeInput } from "../shapes/DescribeSnapshotAttributeInput";
import { DescribeSnapshotAttributeOutput } from "../shapes/DescribeSnapshotAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
