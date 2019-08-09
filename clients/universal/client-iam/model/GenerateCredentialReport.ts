import { GenerateCredentialReportInput } from "./GenerateCredentialReportInput";
import { GenerateCredentialReportOutput } from "./GenerateCredentialReportOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GenerateCredentialReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateCredentialReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateCredentialReportInput
  },
  output: {
    shape: GenerateCredentialReportOutput,
    resultWrapper: "GenerateCredentialReportResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
