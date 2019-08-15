import { DescribeClusterSubnetGroupsInput } from "../shapes/DescribeClusterSubnetGroupsInput";
import { DescribeClusterSubnetGroupsOutput } from "../shapes/DescribeClusterSubnetGroupsOutput";
import { ClusterSubnetGroupNotFoundFault } from "../shapes/ClusterSubnetGroupNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterSubnetGroupsInput
  },
  output: {
    shape: DescribeClusterSubnetGroupsOutput,
    resultWrapper: "DescribeClusterSubnetGroupsResult"
  },
  errors: [
    {
      shape: ClusterSubnetGroupNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
