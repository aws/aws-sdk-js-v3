import { StartDocumentAnalysisInput } from "../shapes/StartDocumentAnalysisInput";
import { StartDocumentAnalysisOutput } from "../shapes/StartDocumentAnalysisOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { UnsupportedDocumentException } from "../shapes/UnsupportedDocumentException";
import { DocumentTooLargeException } from "../shapes/DocumentTooLargeException";
import { BadDocumentException } from "../shapes/BadDocumentException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDocumentAnalysis: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDocumentAnalysis",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDocumentAnalysisInput
  },
  output: {
    shape: StartDocumentAnalysisOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidS3ObjectException
    },
    {
      shape: UnsupportedDocumentException
    },
    {
      shape: DocumentTooLargeException
    },
    {
      shape: BadDocumentException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: InternalServerError
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    }
  ]
};
