import { DescribeNetworkAclsInput } from "./DescribeNetworkAclsInput";
import { DescribeNetworkAclsOutput } from "./DescribeNetworkAclsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeNetworkAcls: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNetworkAcls",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNetworkAclsInput
  },
  output: {
    shape: DescribeNetworkAclsOutput
  },
  errors: []
};
