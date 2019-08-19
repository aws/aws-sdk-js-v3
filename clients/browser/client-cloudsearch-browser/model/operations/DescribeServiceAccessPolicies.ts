import { DescribeServiceAccessPoliciesInput } from "../shapes/DescribeServiceAccessPoliciesInput";
import { DescribeServiceAccessPoliciesOutput } from "../shapes/DescribeServiceAccessPoliciesOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServiceAccessPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServiceAccessPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServiceAccessPoliciesInput
  },
  output: {
    shape: DescribeServiceAccessPoliciesOutput,
    resultWrapper: "DescribeServiceAccessPoliciesResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
