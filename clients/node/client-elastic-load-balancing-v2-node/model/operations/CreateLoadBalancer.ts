import { CreateLoadBalancerInput } from "../shapes/CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "../shapes/CreateLoadBalancerOutput";
import { DuplicateLoadBalancerNameException } from "../shapes/DuplicateLoadBalancerNameException";
import { TooManyLoadBalancersException } from "../shapes/TooManyLoadBalancersException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "../shapes/SubnetNotFoundException";
import { InvalidSubnetException } from "../shapes/InvalidSubnetException";
import { InvalidSecurityGroupException } from "../shapes/InvalidSecurityGroupException";
import { InvalidSchemeException } from "../shapes/InvalidSchemeException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { AllocationIdNotFoundException } from "../shapes/AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "../shapes/AvailabilityZoneNotSupportedException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLoadBalancerInput
  },
  output: {
    shape: CreateLoadBalancerOutput,
    resultWrapper: "CreateLoadBalancerResult"
  },
  errors: [
    {
      shape: DuplicateLoadBalancerNameException
    },
    {
      shape: TooManyLoadBalancersException
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
      shape: InvalidSecurityGroupException
    },
    {
      shape: InvalidSchemeException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: DuplicateTagKeysException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: AllocationIdNotFoundException
    },
    {
      shape: AvailabilityZoneNotSupportedException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
