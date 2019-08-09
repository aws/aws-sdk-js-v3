import { DescribeElasticLoadBalancersInput } from "./DescribeElasticLoadBalancersInput";
import { DescribeElasticLoadBalancersOutput } from "./DescribeElasticLoadBalancersOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
