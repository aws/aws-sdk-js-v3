import { DescribeDBClusterSnapshotsInput } from "./DescribeDBClusterSnapshotsInput";
import { DescribeDBClusterSnapshotsOutput } from "./DescribeDBClusterSnapshotsOutput";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBClusterSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterSnapshotsInput
  },
  output: {
    shape: DescribeDBClusterSnapshotsOutput,
    resultWrapper: "DescribeDBClusterSnapshotsResult"
  },
  errors: [
    {
      shape: DBClusterSnapshotNotFoundFault
    }
  ]
};
