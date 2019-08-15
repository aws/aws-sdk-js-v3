import { StartDocumentClassificationJobInput } from "../shapes/StartDocumentClassificationJobInput";
import { StartDocumentClassificationJobOutput } from "../shapes/StartDocumentClassificationJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { KmsKeyValidationException } from "../shapes/KmsKeyValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDocumentClassificationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDocumentClassificationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDocumentClassificationJobInput
  },
  output: {
    shape: StartDocumentClassificationJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: KmsKeyValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
