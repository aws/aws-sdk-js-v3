import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { InvalidCertificateException } from "./InvalidCertificateException";
import { DuplicateCertificateException } from "./DuplicateCertificateException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UploadSigningCertificateExceptionsUnion =
  | LimitExceededException
  | EntityAlreadyExistsException
  | MalformedCertificateException
  | InvalidCertificateException
  | DuplicateCertificateException
  | NoSuchEntityException
  | ServiceFailureException;
