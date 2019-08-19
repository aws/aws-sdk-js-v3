import { DetachElasticLoadBalancerInput } from "../shapes/DetachElasticLoadBalancerInput";
import { DetachElasticLoadBalancerOutput } from "../shapes/DetachElasticLoadBalancerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachElasticLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachElasticLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachElasticLoadBalancerInput
  },
  output: {
    shape: DetachElasticLoadBalancerOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
