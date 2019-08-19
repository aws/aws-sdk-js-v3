import { SetIpAddressTypeInput } from "../shapes/SetIpAddressTypeInput";
import { SetIpAddressTypeOutput } from "../shapes/SetIpAddressTypeOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { InvalidSubnetException } from "../shapes/InvalidSubnetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIpAddressType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIpAddressType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIpAddressTypeInput
  },
  output: {
    shape: SetIpAddressTypeOutput,
    resultWrapper: "SetIpAddressTypeResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: InvalidSubnetException
    }
  ]
};
