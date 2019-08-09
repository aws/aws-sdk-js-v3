import { DeleteDocumentClassifierInput } from "./DeleteDocumentClassifierInput";
import { DeleteDocumentClassifierOutput } from "./DeleteDocumentClassifierOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
