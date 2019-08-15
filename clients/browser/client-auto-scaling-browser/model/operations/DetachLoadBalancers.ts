import { DetachLoadBalancersInput } from "../shapes/DetachLoadBalancersInput";
import { DetachLoadBalancersOutput } from "../shapes/DetachLoadBalancersOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachLoadBalancers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachLoadBalancers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachLoadBalancersInput
  },
  output: {
    shape: DetachLoadBalancersOutput,
    resultWrapper: "DetachLoadBalancersResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
