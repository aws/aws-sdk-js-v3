import { DescribeSnapshotCopyGrantsInput } from "../shapes/DescribeSnapshotCopyGrantsInput";
import { DescribeSnapshotCopyGrantsOutput } from "../shapes/DescribeSnapshotCopyGrantsOutput";
import { SnapshotCopyGrantNotFoundFault } from "../shapes/SnapshotCopyGrantNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSnapshotCopyGrants: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshotCopyGrants",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotCopyGrantsInput
  },
  output: {
    shape: DescribeSnapshotCopyGrantsOutput,
    resultWrapper: "DescribeSnapshotCopyGrantsResult"
  },
  errors: [
    {
      shape: SnapshotCopyGrantNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
