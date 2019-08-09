import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DuplicatePolicyNameException } from "./DuplicatePolicyNameException";
import { TooManyPoliciesException } from "./TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type CreateAppCookieStickinessPolicyExceptionsUnion =
  | AccessPointNotFoundException
  | DuplicatePolicyNameException
  | TooManyPoliciesException
  | InvalidConfigurationRequestException;
