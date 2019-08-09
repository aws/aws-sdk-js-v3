import { ApplySecurityGroupsToLoadBalancerInput } from "./ApplySecurityGroupsToLoadBalancerInput";
import { ApplySecurityGroupsToLoadBalancerOutput } from "./ApplySecurityGroupsToLoadBalancerOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
