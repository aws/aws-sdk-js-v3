import { DescribeServiceAccessPoliciesInput } from "./DescribeServiceAccessPoliciesInput";
import { DescribeServiceAccessPoliciesOutput } from "./DescribeServiceAccessPoliciesOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
