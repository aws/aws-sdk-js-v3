import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteInputExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException
  | ResourceInUseException;
