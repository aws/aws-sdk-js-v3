import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type DeleteResolverRuleExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | ResourceInUseException
  | InternalServiceErrorException
  | ThrottlingException;
