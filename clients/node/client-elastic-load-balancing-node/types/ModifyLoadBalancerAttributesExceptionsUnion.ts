import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { LoadBalancerAttributeNotFoundException } from "./LoadBalancerAttributeNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type ModifyLoadBalancerAttributesExceptionsUnion =
  | AccessPointNotFoundException
  | LoadBalancerAttributeNotFoundException
  | InvalidConfigurationRequestException;
