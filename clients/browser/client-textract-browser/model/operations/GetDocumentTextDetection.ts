import { GetDocumentTextDetectionInput } from "../shapes/GetDocumentTextDetectionInput";
import { GetDocumentTextDetectionOutput } from "../shapes/GetDocumentTextDetectionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { InvalidJobIdException } from "../shapes/InvalidJobIdException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
