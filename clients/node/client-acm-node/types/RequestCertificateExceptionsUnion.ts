import { LimitExceededException } from "./LimitExceededException";
import { InvalidDomainValidationOptionsException } from "./InvalidDomainValidationOptionsException";
import { InvalidArnException } from "./InvalidArnException";
export type RequestCertificateExceptionsUnion =
  | LimitExceededException
  | InvalidDomainValidationOptionsException
  | InvalidArnException;
