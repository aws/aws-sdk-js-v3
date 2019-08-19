import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListDetectorModelsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException;
