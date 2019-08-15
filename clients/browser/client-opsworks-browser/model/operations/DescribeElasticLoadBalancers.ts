import { DescribeElasticLoadBalancersInput } from "../shapes/DescribeElasticLoadBalancersInput";
import { DescribeElasticLoadBalancersOutput } from "../shapes/DescribeElasticLoadBalancersOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeElasticLoadBalancers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticLoadBalancers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeElasticLoadBalancersInput
  },
  output: {
    shape: DescribeElasticLoadBalancersOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
