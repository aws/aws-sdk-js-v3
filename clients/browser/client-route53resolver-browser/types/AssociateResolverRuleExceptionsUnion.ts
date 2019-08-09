import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type AssociateResolverRuleExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InvalidParameterException
  | ResourceUnavailableException
  | ResourceExistsException
  | InternalServiceErrorException
  | ThrottlingException;
