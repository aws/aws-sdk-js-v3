import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
export type ListDatasetsExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ServiceUnavailableException
  | ThrottlingException;
