import { DescribeClusterSnapshotsInput } from "./DescribeClusterSnapshotsInput";
import { DescribeClusterSnapshotsOutput } from "./DescribeClusterSnapshotsOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
