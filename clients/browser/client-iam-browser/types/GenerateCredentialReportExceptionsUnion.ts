import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GenerateCredentialReportExceptionsUnion =
  | LimitExceededException
  | ServiceFailureException;
