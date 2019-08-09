import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyTypeNotFoundException } from "./PolicyTypeNotFoundException";
import { DuplicatePolicyNameException } from "./DuplicatePolicyNameException";
import { TooManyPoliciesException } from "./TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type CreateLoadBalancerPolicyExceptionsUnion =
  | AccessPointNotFoundException
  | PolicyTypeNotFoundException
  | DuplicatePolicyNameException
  | TooManyPoliciesException
  | InvalidConfigurationRequestException;
