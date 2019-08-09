import { AttachLoadBalancerToSubnetsInput } from "./AttachLoadBalancerToSubnetsInput";
import { AttachLoadBalancerToSubnetsOutput } from "./AttachLoadBalancerToSubnetsOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachLoadBalancerToSubnets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachLoadBalancerToSubnets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachLoadBalancerToSubnetsInput
  },
  output: {
    shape: AttachLoadBalancerToSubnetsOutput,
    resultWrapper: "AttachLoadBalancerToSubnetsResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: SubnetNotFoundException
    },
    {
      shape: InvalidSubnetException
    }
  ]
};
