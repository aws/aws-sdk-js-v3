import { DeleteEntityRecognizerInput } from "../shapes/DeleteEntityRecognizerInput";
import { DeleteEntityRecognizerOutput } from "../shapes/DeleteEntityRecognizerOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
