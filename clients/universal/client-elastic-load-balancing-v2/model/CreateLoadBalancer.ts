import { CreateLoadBalancerInput } from "./CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "./CreateLoadBalancerOutput";
import { DuplicateLoadBalancerNameException } from "./DuplicateLoadBalancerNameException";
import { TooManyLoadBalancersException } from "./TooManyLoadBalancersException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
import { InvalidSchemeException } from "./InvalidSchemeException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { ResourceInUseException } from "./ResourceInUseException";
import { AllocationIdNotFoundException } from "./AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "./AvailabilityZoneNotSupportedException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
