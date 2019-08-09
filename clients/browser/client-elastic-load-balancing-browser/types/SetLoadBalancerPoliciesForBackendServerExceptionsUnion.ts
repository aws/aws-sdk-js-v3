import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type SetLoadBalancerPoliciesForBackendServerExceptionsUnion =
  | AccessPointNotFoundException
  | PolicyNotFoundException
  | InvalidConfigurationRequestException;
