import { CredentialReportNotPresentException } from "./CredentialReportNotPresentException";
import { CredentialReportExpiredException } from "./CredentialReportExpiredException";
import { CredentialReportNotReadyException } from "./CredentialReportNotReadyException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetCredentialReportExceptionsUnion =
  | CredentialReportNotPresentException
  | CredentialReportExpiredException
  | CredentialReportNotReadyException
  | ServiceFailureException;
