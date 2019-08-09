import { InvalidParameterException } from "./InvalidParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetResolverRulePolicyExceptionsUnion =
  | InvalidParameterException
  | UnknownResourceException
  | InternalServiceErrorException;
