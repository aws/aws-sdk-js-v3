import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { AllocationIdNotFoundException } from "./AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "./AvailabilityZoneNotSupportedException";
export type SetSubnetsExceptionsUnion =
  | LoadBalancerNotFoundException
  | InvalidConfigurationRequestException
  | SubnetNotFoundException
  | InvalidSubnetException
  | AllocationIdNotFoundException
  | AvailabilityZoneNotSupportedException;
