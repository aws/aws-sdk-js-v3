import { DescribeStaleSecurityGroupsInput } from "./DescribeStaleSecurityGroupsInput";
import { DescribeStaleSecurityGroupsOutput } from "./DescribeStaleSecurityGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStaleSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStaleSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStaleSecurityGroupsInput
  },
  output: {
    shape: DescribeStaleSecurityGroupsOutput
  },
  errors: []
};
