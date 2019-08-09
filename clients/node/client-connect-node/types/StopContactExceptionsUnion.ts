import { InvalidRequestException } from "./InvalidRequestException";
import { ContactNotFoundException } from "./ContactNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type StopContactExceptionsUnion =
  | InvalidRequestException
  | ContactNotFoundException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalServiceException;
