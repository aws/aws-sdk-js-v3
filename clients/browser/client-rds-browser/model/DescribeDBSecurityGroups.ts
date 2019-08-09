import { DescribeDBSecurityGroupsInput } from "./DescribeDBSecurityGroupsInput";
import { DescribeDBSecurityGroupsOutput } from "./DescribeDBSecurityGroupsOutput";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
