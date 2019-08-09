import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
export type SetSecurityGroupsExceptionsUnion =
  | LoadBalancerNotFoundException
  | InvalidConfigurationRequestException
  | InvalidSecurityGroupException;
