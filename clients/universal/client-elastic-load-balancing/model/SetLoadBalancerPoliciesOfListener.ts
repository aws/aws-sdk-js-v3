import { SetLoadBalancerPoliciesOfListenerInput } from "./SetLoadBalancerPoliciesOfListenerInput";
import { SetLoadBalancerPoliciesOfListenerOutput } from "./SetLoadBalancerPoliciesOfListenerOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
