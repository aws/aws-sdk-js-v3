import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
export type UpdateCertificateOptionsExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException
  | InvalidStateException
  | InvalidArnException;
