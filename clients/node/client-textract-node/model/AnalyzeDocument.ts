import { AnalyzeDocumentInput } from "./AnalyzeDocumentInput";
import { AnalyzeDocumentOutput } from "./AnalyzeDocumentOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { UnsupportedDocumentException } from "./UnsupportedDocumentException";
import { DocumentTooLargeException } from "./DocumentTooLargeException";
import { BadDocumentException } from "./BadDocumentException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
