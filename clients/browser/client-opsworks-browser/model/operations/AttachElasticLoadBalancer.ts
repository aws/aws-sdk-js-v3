import { AttachElasticLoadBalancerInput } from "../shapes/AttachElasticLoadBalancerInput";
import { AttachElasticLoadBalancerOutput } from "../shapes/AttachElasticLoadBalancerOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachElasticLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachElasticLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachElasticLoadBalancerInput
  },
  output: {
    shape: AttachElasticLoadBalancerOutput
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
