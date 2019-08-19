import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { InvalidAuthenticationCodeException } from "./InvalidAuthenticationCodeException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type EnableMFADeviceExceptionsUnion =
  | EntityAlreadyExistsException
  | EntityTemporarilyUnmodifiableException
  | InvalidAuthenticationCodeException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException;
