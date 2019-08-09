import { DeleteEntityRecognizerInput } from "./DeleteEntityRecognizerInput";
import { DeleteEntityRecognizerOutput } from "./DeleteEntityRecognizerOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteEntityRecognizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEntityRecognizer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEntityRecognizerInput
  },
  output: {
    shape: DeleteEntityRecognizerOutput
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
