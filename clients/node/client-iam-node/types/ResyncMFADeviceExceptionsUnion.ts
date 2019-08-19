import { InvalidAuthenticationCodeException } from "./InvalidAuthenticationCodeException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ResyncMFADeviceExceptionsUnion =
  | InvalidAuthenticationCodeException
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
