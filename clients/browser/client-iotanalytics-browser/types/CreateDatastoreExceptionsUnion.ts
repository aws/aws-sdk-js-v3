import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateDatastoreExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | InternalFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | LimitExceededException;
