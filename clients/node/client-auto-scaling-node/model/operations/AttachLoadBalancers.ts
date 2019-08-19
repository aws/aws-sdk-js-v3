import { AttachLoadBalancersInput } from "../shapes/AttachLoadBalancersInput";
import { AttachLoadBalancersOutput } from "../shapes/AttachLoadBalancersOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachLoadBalancers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachLoadBalancers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachLoadBalancersInput
  },
  output: {
    shape: AttachLoadBalancersOutput,
    resultWrapper: "AttachLoadBalancersResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
