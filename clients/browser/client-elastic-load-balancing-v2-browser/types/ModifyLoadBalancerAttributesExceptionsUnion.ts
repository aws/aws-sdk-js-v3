import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type ModifyLoadBalancerAttributesExceptionsUnion =
  | LoadBalancerNotFoundException
  | InvalidConfigurationRequestException;
