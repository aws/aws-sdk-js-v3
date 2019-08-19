import { DeregisterInstancesFromLoadBalancerInput } from "../shapes/DeregisterInstancesFromLoadBalancerInput";
import { DeregisterInstancesFromLoadBalancerOutput } from "../shapes/DeregisterInstancesFromLoadBalancerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidEndPointException } from "../shapes/InvalidEndPointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterInstancesFromLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterInstancesFromLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterInstancesFromLoadBalancerInput
  },
  output: {
    shape: DeregisterInstancesFromLoadBalancerOutput,
    resultWrapper: "DeregisterInstancesFromLoadBalancerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidEndPointException
    }
  ]
};
