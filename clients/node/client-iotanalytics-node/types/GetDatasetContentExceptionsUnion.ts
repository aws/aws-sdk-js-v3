import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
export type GetDatasetContentExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | InternalFailureException
  | ServiceUnavailableException
  | ThrottlingException;
