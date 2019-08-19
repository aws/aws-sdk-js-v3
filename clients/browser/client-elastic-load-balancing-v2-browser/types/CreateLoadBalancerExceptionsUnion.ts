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
export type CreateLoadBalancerExceptionsUnion =
  | DuplicateLoadBalancerNameException
  | TooManyLoadBalancersException
  | InvalidConfigurationRequestException
  | SubnetNotFoundException
  | InvalidSubnetException
  | InvalidSecurityGroupException
  | InvalidSchemeException
  | TooManyTagsException
  | DuplicateTagKeysException
  | ResourceInUseException
  | AllocationIdNotFoundException
  | AvailabilityZoneNotSupportedException
  | OperationNotPermittedException;
