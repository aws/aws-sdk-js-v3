import { DetectDocumentTextInput } from "../shapes/DetectDocumentTextInput";
import { DetectDocumentTextOutput } from "../shapes/DetectDocumentTextOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidS3ObjectException } from "../shapes/InvalidS3ObjectException";
import { UnsupportedDocumentException } from "../shapes/UnsupportedDocumentException";
import { DocumentTooLargeException } from "../shapes/DocumentTooLargeException";
import { BadDocumentException } from "../shapes/BadDocumentException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetectDocumentText: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectDocumentText",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectDocumentTextInput
  },
  output: {
    shape: DetectDocumentTextOutput
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
      shape: ThrottlingException
    }
  ]
};
