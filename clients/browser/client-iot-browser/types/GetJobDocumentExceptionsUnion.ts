import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetJobDocumentExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | ServiceUnavailableException;
