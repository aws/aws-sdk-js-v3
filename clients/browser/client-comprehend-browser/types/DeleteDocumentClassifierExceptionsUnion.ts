import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServerException } from "./InternalServerException";
export type DeleteDocumentClassifierExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | ResourceInUseException
  | InternalServerException;
