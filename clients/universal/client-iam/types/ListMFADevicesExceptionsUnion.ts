import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListMFADevicesExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
