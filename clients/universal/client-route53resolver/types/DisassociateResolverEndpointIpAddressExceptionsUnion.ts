import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type DisassociateResolverEndpointIpAddressExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceExistsException
  | InternalServiceErrorException
  | ThrottlingException;
