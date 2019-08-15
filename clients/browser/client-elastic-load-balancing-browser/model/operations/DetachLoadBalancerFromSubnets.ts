import { DetachLoadBalancerFromSubnetsInput } from "../shapes/DetachLoadBalancerFromSubnetsInput";
import { DetachLoadBalancerFromSubnetsOutput } from "../shapes/DetachLoadBalancerFromSubnetsOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachLoadBalancerFromSubnets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachLoadBalancerFromSubnets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachLoadBalancerFromSubnetsInput
  },
  output: {
    shape: DetachLoadBalancerFromSubnetsOutput,
    resultWrapper: "DetachLoadBalancerFromSubnetsResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
