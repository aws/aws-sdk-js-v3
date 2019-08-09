import { StartDocumentTextDetectionInput } from "./StartDocumentTextDetectionInput";
import { StartDocumentTextDetectionOutput } from "./StartDocumentTextDetectionOutput";
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

export const StartDocumentTextDetection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDocumentTextDetection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDocumentTextDetectionInput
  },
  output: {
    shape: StartDocumentTextDetectionOutput
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
