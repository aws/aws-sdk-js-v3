import { DeleteLoadBalancerListenersInput } from "./DeleteLoadBalancerListenersInput";
import { DeleteLoadBalancerListenersOutput } from "./DeleteLoadBalancerListenersOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLoadBalancerListeners: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoadBalancerListeners",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLoadBalancerListenersInput
  },
  output: {
    shape: DeleteLoadBalancerListenersOutput,
    resultWrapper: "DeleteLoadBalancerListenersResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    }
  ]
};
