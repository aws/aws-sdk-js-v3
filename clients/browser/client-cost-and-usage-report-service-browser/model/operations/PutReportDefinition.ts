import { PutReportDefinitionInput } from "../shapes/PutReportDefinitionInput";
import { PutReportDefinitionOutput } from "../shapes/PutReportDefinitionOutput";
import { DuplicateReportNameException } from "../shapes/DuplicateReportNameException";
import { ReportLimitReachedException } from "../shapes/ReportLimitReachedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
