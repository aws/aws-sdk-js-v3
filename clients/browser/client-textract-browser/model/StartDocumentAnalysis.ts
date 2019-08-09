import { StartDocumentAnalysisInput } from "./StartDocumentAnalysisInput";
import { StartDocumentAnalysisOutput } from "./StartDocumentAnalysisOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { UnsupportedDocumentException } from "./UnsupportedDocumentException";
import { DocumentTooLargeException } from "./DocumentTooLargeException";
import { BadDocumentException } from "./BadDocumentException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
