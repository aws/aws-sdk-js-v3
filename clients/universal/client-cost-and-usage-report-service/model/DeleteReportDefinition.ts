import { DeleteReportDefinitionInput } from "./DeleteReportDefinitionInput";
import { DeleteReportDefinitionOutput } from "./DeleteReportDefinitionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReportDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReportDefinition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReportDefinitionInput
  },
  output: {
    shape: DeleteReportDefinitionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ValidationException
    }
  ]
};
