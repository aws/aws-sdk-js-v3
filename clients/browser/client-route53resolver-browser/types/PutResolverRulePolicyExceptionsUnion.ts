import { InvalidPolicyDocument } from "./InvalidPolicyDocument";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type PutResolverRulePolicyExceptionsUnion =
  | InvalidPolicyDocument
  | InvalidParameterException
  | UnknownResourceException
  | InternalServiceErrorException;
