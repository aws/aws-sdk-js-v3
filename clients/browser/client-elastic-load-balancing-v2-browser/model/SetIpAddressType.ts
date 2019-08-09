import { SetIpAddressTypeInput } from "./SetIpAddressTypeInput";
import { SetIpAddressTypeOutput } from "./SetIpAddressTypeOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
