import { SetSecurityGroupsInput } from "../shapes/SetSecurityGroupsInput";
import { SetSecurityGroupsOutput } from "../shapes/SetSecurityGroupsOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "../shapes/InvalidSecurityGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSecurityGroupsInput
  },
  output: {
    shape: SetSecurityGroupsOutput,
    resultWrapper: "SetSecurityGroupsResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: InvalidSecurityGroupException
    }
  ]
};
