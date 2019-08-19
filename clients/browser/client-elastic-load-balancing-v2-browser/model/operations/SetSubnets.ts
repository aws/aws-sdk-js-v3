import { SetSubnetsInput } from "../shapes/SetSubnetsInput";
import { SetSubnetsOutput } from "../shapes/SetSubnetsOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "../shapes/SubnetNotFoundException";
import { InvalidSubnetException } from "../shapes/InvalidSubnetException";
import { AllocationIdNotFoundException } from "../shapes/AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "../shapes/AvailabilityZoneNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetSubnets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSubnets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSubnetsInput
  },
  output: {
    shape: SetSubnetsOutput,
    resultWrapper: "SetSubnetsResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: SubnetNotFoundException
    },
    {
      shape: InvalidSubnetException
    },
    {
      shape: AllocationIdNotFoundException
    },
    {
      shape: AvailabilityZoneNotSupportedException
    }
  ]
};
