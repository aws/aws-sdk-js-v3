import { DeleteLoadBalancerPolicyInput } from "./DeleteLoadBalancerPolicyInput";
import { DeleteLoadBalancerPolicyOutput } from "./DeleteLoadBalancerPolicyOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLoadBalancerPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoadBalancerPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLoadBalancerPolicyInput
  },
  output: {
    shape: DeleteLoadBalancerPolicyOutput,
    resultWrapper: "DeleteLoadBalancerPolicyResult"
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
