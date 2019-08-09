import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
export type UpdateInputExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | ResourceNotFoundException
  | InternalFailureException
  | ServiceUnavailableException
  | ResourceInUseException;
