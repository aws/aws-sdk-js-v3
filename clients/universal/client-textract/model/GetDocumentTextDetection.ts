import { GetDocumentTextDetectionInput } from "./GetDocumentTextDetectionInput";
import { GetDocumentTextDetectionOutput } from "./GetDocumentTextDetectionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { InvalidJobIdException } from "./InvalidJobIdException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDocumentTextDetection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentTextDetection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDocumentTextDetectionInput
  },
  output: {
    shape: GetDocumentTextDetectionOutput
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
