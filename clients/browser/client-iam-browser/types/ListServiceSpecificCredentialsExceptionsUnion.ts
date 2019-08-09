import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceNotSupportedException } from "./ServiceNotSupportedException";
export type ListServiceSpecificCredentialsExceptionsUnion =
  | NoSuchEntityException
  | ServiceNotSupportedException;
