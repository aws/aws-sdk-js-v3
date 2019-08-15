import { DescribeDBSnapshotsInput } from "../shapes/DescribeDBSnapshotsInput";
import { DescribeDBSnapshotsOutput } from "../shapes/DescribeDBSnapshotsOutput";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBSnapshotsInput
  },
  output: {
    shape: DescribeDBSnapshotsOutput,
    resultWrapper: "DescribeDBSnapshotsResult"
  },
  errors: [
    {
      shape: DBSnapshotNotFoundFault
    }
  ]
};
