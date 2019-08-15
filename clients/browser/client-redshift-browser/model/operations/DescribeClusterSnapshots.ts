import { DescribeClusterSnapshotsInput } from "../shapes/DescribeClusterSnapshotsInput";
import { DescribeClusterSnapshotsOutput } from "../shapes/DescribeClusterSnapshotsOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterSnapshotsInput
  },
  output: {
    shape: DescribeClusterSnapshotsOutput,
    resultWrapper: "DescribeClusterSnapshotsResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
