import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetServerCertificateExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
