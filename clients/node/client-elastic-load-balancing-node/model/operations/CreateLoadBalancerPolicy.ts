import { CreateLoadBalancerPolicyInput } from "../shapes/CreateLoadBalancerPolicyInput";
import { CreateLoadBalancerPolicyOutput } from "../shapes/CreateLoadBalancerPolicyOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { PolicyTypeNotFoundException } from "../shapes/PolicyTypeNotFoundException";
import { DuplicatePolicyNameException } from "../shapes/DuplicatePolicyNameException";
import { TooManyPoliciesException } from "../shapes/TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
