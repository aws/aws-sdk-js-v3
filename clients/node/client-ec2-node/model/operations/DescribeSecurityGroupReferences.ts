import { DescribeSecurityGroupReferencesInput } from "../shapes/DescribeSecurityGroupReferencesInput";
import { DescribeSecurityGroupReferencesOutput } from "../shapes/DescribeSecurityGroupReferencesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSecurityGroupReferences: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSecurityGroupReferences",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSecurityGroupReferencesInput
  },
  output: {
    shape: DescribeSecurityGroupReferencesOutput
  },
  errors: []
};
