import { DeleteDocumentClassifierInput } from "../shapes/DeleteDocumentClassifierInput";
import { DeleteDocumentClassifierOutput } from "../shapes/DeleteDocumentClassifierOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDocumentClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDocumentClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDocumentClassifierInput
  },
  output: {
    shape: DeleteDocumentClassifierOutput
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
      shape: ResourceInUseException
    },
    {
      shape: InternalServerException
    }
  ]
};
