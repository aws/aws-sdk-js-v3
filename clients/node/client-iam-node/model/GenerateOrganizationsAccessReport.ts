import { GenerateOrganizationsAccessReportInput } from "./GenerateOrganizationsAccessReportInput";
import { GenerateOrganizationsAccessReportOutput } from "./GenerateOrganizationsAccessReportOutput";
import { ReportGenerationLimitExceededException } from "./ReportGenerationLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GenerateOrganizationsAccessReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateOrganizationsAccessReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateOrganizationsAccessReportInput
  },
  output: {
    shape: GenerateOrganizationsAccessReportOutput,
    resultWrapper: "GenerateOrganizationsAccessReportResult"
  },
  errors: [
    {
      shape: ReportGenerationLimitExceededException
    }
  ]
};
