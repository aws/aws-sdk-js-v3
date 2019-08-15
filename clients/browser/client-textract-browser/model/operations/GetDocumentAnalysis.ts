import { GetDocumentAnalysisInput } from "../shapes/GetDocumentAnalysisInput";
import { GetDocumentAnalysisOutput } from "../shapes/GetDocumentAnalysisOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidJobIdException } from "../shapes/InvalidJobIdException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentAnalysis: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentAnalysis",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDocumentAnalysisInput
  },
  output: {
    shape: GetDocumentAnalysisOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InvalidJobIdException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    }
  ]
};
