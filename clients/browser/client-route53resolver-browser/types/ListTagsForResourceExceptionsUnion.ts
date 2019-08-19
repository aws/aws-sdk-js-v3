import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidNextTokenException
  | InvalidRequestException
  | InternalServiceErrorException
  | ThrottlingException;
