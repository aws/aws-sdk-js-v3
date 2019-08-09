import { AttachElasticLoadBalancerInput } from "./AttachElasticLoadBalancerInput";
import { AttachElasticLoadBalancerOutput } from "./AttachElasticLoadBalancerOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
