import { SetLoadBalancerPoliciesForBackendServerInput } from "./SetLoadBalancerPoliciesForBackendServerInput";
import { SetLoadBalancerPoliciesForBackendServerOutput } from "./SetLoadBalancerPoliciesForBackendServerOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
