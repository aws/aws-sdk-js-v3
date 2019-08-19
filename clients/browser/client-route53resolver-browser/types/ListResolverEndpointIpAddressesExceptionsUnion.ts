import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ThrottlingException } from "./ThrottlingException";
export type ListResolverEndpointIpAddressesExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServiceErrorException
  | InvalidNextTokenException
  | ThrottlingException;
