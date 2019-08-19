import { DescribeDBSecurityGroupsInput } from "../shapes/DescribeDBSecurityGroupsInput";
import { DescribeDBSecurityGroupsOutput } from "../shapes/DescribeDBSecurityGroupsOutput";
import { DBSecurityGroupNotFoundFault } from "../shapes/DBSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBSecurityGroupsInput
  },
  output: {
    shape: DescribeDBSecurityGroupsOutput,
    resultWrapper: "DescribeDBSecurityGroupsResult"
  },
  errors: [
    {
      shape: DBSecurityGroupNotFoundFault
    }
  ]
};
