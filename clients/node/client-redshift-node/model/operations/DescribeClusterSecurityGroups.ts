import { DescribeClusterSecurityGroupsInput } from "../shapes/DescribeClusterSecurityGroupsInput";
import { DescribeClusterSecurityGroupsOutput } from "../shapes/DescribeClusterSecurityGroupsOutput";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterSecurityGroupsInput
  },
  output: {
    shape: DescribeClusterSecurityGroupsOutput,
    resultWrapper: "DescribeClusterSecurityGroupsResult"
  },
  errors: [
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
