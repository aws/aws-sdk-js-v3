import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type CreateResolverEndpointExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | InvalidRequestException
  | ResourceExistsException
  | LimitExceededException
  | InternalServiceErrorException
  | ThrottlingException;
