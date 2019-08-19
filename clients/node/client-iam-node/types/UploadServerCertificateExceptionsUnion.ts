import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { KeyPairMismatchException } from "./KeyPairMismatchException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UploadServerCertificateExceptionsUnion =
  | LimitExceededException
  | EntityAlreadyExistsException
  | MalformedCertificateException
  | KeyPairMismatchException
  | ServiceFailureException;
