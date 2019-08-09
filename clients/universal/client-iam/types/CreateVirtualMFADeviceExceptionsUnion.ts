import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateVirtualMFADeviceExceptionsUnion =
  | LimitExceededException
  | EntityAlreadyExistsException
  | ServiceFailureException;
