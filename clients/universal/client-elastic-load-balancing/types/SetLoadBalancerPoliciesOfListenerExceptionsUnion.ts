import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type SetLoadBalancerPoliciesOfListenerExceptionsUnion =
  | AccessPointNotFoundException
  | PolicyNotFoundException
  | ListenerNotFoundException
  | InvalidConfigurationRequestException;
