import { DescribeSecurityGroupsInput } from "../shapes/DescribeSecurityGroupsInput";
import { DescribeSecurityGroupsOutput } from "../shapes/DescribeSecurityGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSecurityGroupsInput
  },
  output: {
    shape: DescribeSecurityGroupsOutput
  },
  errors: []
};
