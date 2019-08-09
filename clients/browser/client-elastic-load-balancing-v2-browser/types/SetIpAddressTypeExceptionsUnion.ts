import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSubnetException } from "./InvalidSubnetException";
export type SetIpAddressTypeExceptionsUnion =
  | LoadBalancerNotFoundException
  | InvalidConfigurationRequestException
  | InvalidSubnetException;
