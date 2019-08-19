import { GenerateCredentialReportInput } from "../shapes/GenerateCredentialReportInput";
import { GenerateCredentialReportOutput } from "../shapes/GenerateCredentialReportOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
