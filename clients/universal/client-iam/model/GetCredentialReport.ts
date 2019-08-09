import { GetCredentialReportInput } from "./GetCredentialReportInput";
import { GetCredentialReportOutput } from "./GetCredentialReportOutput";
import { CredentialReportNotPresentException } from "./CredentialReportNotPresentException";
import { CredentialReportExpiredException } from "./CredentialReportExpiredException";
import { CredentialReportNotReadyException } from "./CredentialReportNotReadyException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCredentialReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCredentialReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCredentialReportInput
  },
  output: {
    shape: GetCredentialReportOutput,
    resultWrapper: "GetCredentialReportResult"
  },
  errors: [
    {
      shape: CredentialReportNotPresentException
    },
    {
      shape: CredentialReportExpiredException
    },
    {
      shape: CredentialReportNotReadyException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
