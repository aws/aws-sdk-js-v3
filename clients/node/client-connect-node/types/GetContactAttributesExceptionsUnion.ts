import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type GetContactAttributesExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | InternalServiceException;
