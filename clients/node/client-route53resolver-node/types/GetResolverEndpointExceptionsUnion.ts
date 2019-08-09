import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type GetResolverEndpointExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServiceErrorException
  | ThrottlingException;
