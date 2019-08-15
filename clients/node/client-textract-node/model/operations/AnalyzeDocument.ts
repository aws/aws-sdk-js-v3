import { AnalyzeDocumentInput } from "../shapes/AnalyzeDocumentInput";
import { AnalyzeDocumentOutput } from "../shapes/AnalyzeDocumentOutput";
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

export const AnalyzeDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AnalyzeDocument",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AnalyzeDocumentInput
  },
  output: {
    shape: AnalyzeDocumentOutput
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
