import { StartDocumentClassificationJobInput } from "./StartDocumentClassificationJobInput";
import { StartDocumentClassificationJobOutput } from "./StartDocumentClassificationJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
