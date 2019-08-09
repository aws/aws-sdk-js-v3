import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateDetectorModelExceptionsUnion =
  | InvalidRequestException
  | ResourceInUseException
  | ResourceAlreadyExistsException
  | LimitExceededException
  | ThrottlingException
  | InternalFailureException
  | ServiceUnavailableException;
