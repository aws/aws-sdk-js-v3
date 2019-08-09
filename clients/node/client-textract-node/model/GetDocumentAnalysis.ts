import { GetDocumentAnalysisInput } from "./GetDocumentAnalysisInput";
import { GetDocumentAnalysisOutput } from "./GetDocumentAnalysisOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidJobIdException } from "./InvalidJobIdException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
