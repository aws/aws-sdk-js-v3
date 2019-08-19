import { DescribeResourcePoliciesInput } from "../shapes/DescribeResourcePoliciesInput";
import { DescribeResourcePoliciesOutput } from "../shapes/DescribeResourcePoliciesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
