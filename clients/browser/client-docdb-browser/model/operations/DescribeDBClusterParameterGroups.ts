import { DescribeDBClusterParameterGroupsInput } from "../shapes/DescribeDBClusterParameterGroupsInput";
import { DescribeDBClusterParameterGroupsOutput } from "../shapes/DescribeDBClusterParameterGroupsOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBClusterParameterGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterParameterGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterParameterGroupsInput
  },
  output: {
    shape: DescribeDBClusterParameterGroupsOutput,
    resultWrapper: "DescribeDBClusterParameterGroupsResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
