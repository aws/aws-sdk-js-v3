import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
export type ApplySecurityGroupsToLoadBalancerExceptionsUnion =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | InvalidSecurityGroupException;
