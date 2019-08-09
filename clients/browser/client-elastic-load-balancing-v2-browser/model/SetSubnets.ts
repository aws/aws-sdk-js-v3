import { SetSubnetsInput } from "./SetSubnetsInput";
import { SetSubnetsOutput } from "./SetSubnetsOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { AllocationIdNotFoundException } from "./AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "./AvailabilityZoneNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
