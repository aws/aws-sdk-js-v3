import { RegisterInstancesWithLoadBalancerInput } from "./RegisterInstancesWithLoadBalancerInput";
import { RegisterInstancesWithLoadBalancerOutput } from "./RegisterInstancesWithLoadBalancerOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidEndPointException } from "./InvalidEndPointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterInstancesWithLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterInstancesWithLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterInstancesWithLoadBalancerInput
  },
  output: {
    shape: RegisterInstancesWithLoadBalancerOutput,
    resultWrapper: "RegisterInstancesWithLoadBalancerResult"
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
