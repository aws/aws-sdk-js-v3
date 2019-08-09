import { CreateLoadBalancerPolicyInput } from "./CreateLoadBalancerPolicyInput";
import { CreateLoadBalancerPolicyOutput } from "./CreateLoadBalancerPolicyOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyTypeNotFoundException } from "./PolicyTypeNotFoundException";
import { DuplicatePolicyNameException } from "./DuplicatePolicyNameException";
import { TooManyPoliciesException } from "./TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLoadBalancerPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoadBalancerPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLoadBalancerPolicyInput
  },
  output: {
    shape: CreateLoadBalancerPolicyOutput,
    resultWrapper: "CreateLoadBalancerPolicyResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: PolicyTypeNotFoundException
    },
    {
      shape: DuplicatePolicyNameException
    },
    {
      shape: TooManyPoliciesException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
