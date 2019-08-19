import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type UpdateContactAttributesExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalServiceException;
