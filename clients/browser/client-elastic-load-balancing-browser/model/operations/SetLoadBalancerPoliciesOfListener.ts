import { SetLoadBalancerPoliciesOfListenerInput } from "../shapes/SetLoadBalancerPoliciesOfListenerInput";
import { SetLoadBalancerPoliciesOfListenerOutput } from "../shapes/SetLoadBalancerPoliciesOfListenerOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetLoadBalancerPoliciesOfListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLoadBalancerPoliciesOfListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetLoadBalancerPoliciesOfListenerInput
  },
  output: {
    shape: SetLoadBalancerPoliciesOfListenerOutput,
    resultWrapper: "SetLoadBalancerPoliciesOfListenerResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
