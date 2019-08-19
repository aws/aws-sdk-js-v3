import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateServerCertificateExceptionsUnion =
  | NoSuchEntityException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException;
