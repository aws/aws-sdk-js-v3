import { SetSecurityGroupsInput } from "./SetSecurityGroupsInput";
import { SetSecurityGroupsOutput } from "./SetSecurityGroupsOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
