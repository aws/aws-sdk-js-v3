import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceNotSupportedException } from "./ServiceNotSupportedException";
export type CreateServiceSpecificCredentialExceptionsUnion =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceNotSupportedException;
