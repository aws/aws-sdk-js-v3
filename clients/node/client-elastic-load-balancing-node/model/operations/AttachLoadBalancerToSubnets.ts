import { AttachLoadBalancerToSubnetsInput } from "../shapes/AttachLoadBalancerToSubnetsInput";
import { AttachLoadBalancerToSubnetsOutput } from "../shapes/AttachLoadBalancerToSubnetsOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "../shapes/SubnetNotFoundException";
import { InvalidSubnetException } from "../shapes/InvalidSubnetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
