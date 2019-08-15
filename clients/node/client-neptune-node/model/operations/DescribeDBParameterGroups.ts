import { DescribeDBParameterGroupsInput } from "../shapes/DescribeDBParameterGroupsInput";
import { DescribeDBParameterGroupsOutput } from "../shapes/DescribeDBParameterGroupsOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBParameterGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBParameterGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBParameterGroupsInput
  },
  output: {
    shape: DescribeDBParameterGroupsOutput,
    resultWrapper: "DescribeDBParameterGroupsResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
