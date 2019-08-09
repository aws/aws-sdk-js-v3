import { DescribeDBClusterSnapshotAttributesInput } from "./DescribeDBClusterSnapshotAttributesInput";
import { DescribeDBClusterSnapshotAttributesOutput } from "./DescribeDBClusterSnapshotAttributesOutput";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBClusterSnapshotAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterSnapshotAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterSnapshotAttributesInput
  },
  output: {
    shape: DescribeDBClusterSnapshotAttributesOutput,
    resultWrapper: "DescribeDBClusterSnapshotAttributesResult"
  },
  errors: [
    {
      shape: DBClusterSnapshotNotFoundFault
    }
  ]
};
