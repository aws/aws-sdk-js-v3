import { PutReportDefinitionInput } from "./PutReportDefinitionInput";
import { PutReportDefinitionOutput } from "./PutReportDefinitionOutput";
import { DuplicateReportNameException } from "./DuplicateReportNameException";
import { ReportLimitReachedException } from "./ReportLimitReachedException";
import { InternalErrorException } from "./InternalErrorException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutReportDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutReportDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutReportDefinitionInput
  },
  output: {
    shape: PutReportDefinitionOutput
  },
  errors: [
    {
      shape: DuplicateReportNameException
    },
    {
      shape: ReportLimitReachedException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: ValidationException
    }
  ]
};
