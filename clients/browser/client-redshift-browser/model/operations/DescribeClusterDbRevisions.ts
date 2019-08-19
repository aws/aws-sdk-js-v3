import { DescribeClusterDbRevisionsInput } from "../shapes/DescribeClusterDbRevisionsInput";
import { DescribeClusterDbRevisionsOutput } from "../shapes/DescribeClusterDbRevisionsOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterDbRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterDbRevisions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterDbRevisionsInput
  },
  output: {
    shape: DescribeClusterDbRevisionsOutput,
    resultWrapper: "DescribeClusterDbRevisionsResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    }
  ]
};
