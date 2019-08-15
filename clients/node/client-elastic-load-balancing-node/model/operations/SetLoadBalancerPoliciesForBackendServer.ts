import { SetLoadBalancerPoliciesForBackendServerInput } from "../shapes/SetLoadBalancerPoliciesForBackendServerInput";
import { SetLoadBalancerPoliciesForBackendServerOutput } from "../shapes/SetLoadBalancerPoliciesForBackendServerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetLoadBalancerPoliciesForBackendServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLoadBalancerPoliciesForBackendServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetLoadBalancerPoliciesForBackendServerInput
  },
  output: {
    shape: SetLoadBalancerPoliciesForBackendServerOutput,
    resultWrapper: "SetLoadBalancerPoliciesForBackendServerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
