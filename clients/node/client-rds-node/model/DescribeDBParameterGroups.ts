import { DescribeDBParameterGroupsInput } from "./DescribeDBParameterGroupsInput";
import { DescribeDBParameterGroupsOutput } from "./DescribeDBParameterGroupsOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
