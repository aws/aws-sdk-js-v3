import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
export type AssociateResolverEndpointIpAddressExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceExistsException
  | InternalServiceErrorException
  | LimitExceededException
  | ThrottlingException;
