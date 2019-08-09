import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ResourceInUseException } from "./ResourceInUseException";
export type PutLoggingOptionsExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException
  | UnsupportedOperationException
  | ResourceInUseException;
