import { ApplySecurityGroupsToLoadBalancerInput } from "../shapes/ApplySecurityGroupsToLoadBalancerInput";
import { ApplySecurityGroupsToLoadBalancerOutput } from "../shapes/ApplySecurityGroupsToLoadBalancerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "../shapes/InvalidSecurityGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApplySecurityGroupsToLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApplySecurityGroupsToLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApplySecurityGroupsToLoadBalancerInput
  },
  output: {
    shape: ApplySecurityGroupsToLoadBalancerOutput,
    resultWrapper: "ApplySecurityGroupsToLoadBalancerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: InvalidSecurityGroupException
    }
  ]
};
