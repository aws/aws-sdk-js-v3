import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type ListResolverEndpointsExceptionsUnion =
  | InvalidNextTokenException
  | InvalidRequestException
  | InvalidParameterException
  | InternalServiceErrorException
  | ThrottlingException;
