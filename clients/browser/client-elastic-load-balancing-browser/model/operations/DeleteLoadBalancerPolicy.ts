import { DeleteLoadBalancerPolicyInput } from "../shapes/DeleteLoadBalancerPolicyInput";
import { DeleteLoadBalancerPolicyOutput } from "../shapes/DeleteLoadBalancerPolicyOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
