import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
export type CreateInputExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException
  | ResourceAlreadyExistsException;
