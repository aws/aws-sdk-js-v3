import { DetachElasticLoadBalancerInput } from "./DetachElasticLoadBalancerInput";
import { DetachElasticLoadBalancerOutput } from "./DetachElasticLoadBalancerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
