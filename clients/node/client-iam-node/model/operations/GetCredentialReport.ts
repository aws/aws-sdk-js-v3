import { GetCredentialReportInput } from "../shapes/GetCredentialReportInput";
import { GetCredentialReportOutput } from "../shapes/GetCredentialReportOutput";
import { CredentialReportNotPresentException } from "../shapes/CredentialReportNotPresentException";
import { CredentialReportExpiredException } from "../shapes/CredentialReportExpiredException";
import { CredentialReportNotReadyException } from "../shapes/CredentialReportNotReadyException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
