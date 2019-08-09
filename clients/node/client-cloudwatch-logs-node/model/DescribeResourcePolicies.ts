import { DescribeResourcePoliciesInput } from "./DescribeResourcePoliciesInput";
import { DescribeResourcePoliciesOutput } from "./DescribeResourcePoliciesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeResourcePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResourcePolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeResourcePoliciesInput
  },
  output: {
    shape: DescribeResourcePoliciesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
