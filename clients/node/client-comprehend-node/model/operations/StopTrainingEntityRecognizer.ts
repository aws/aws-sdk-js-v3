import { StopTrainingEntityRecognizerInput } from "../shapes/StopTrainingEntityRecognizerInput";
import { StopTrainingEntityRecognizerOutput } from "../shapes/StopTrainingEntityRecognizerOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopTrainingEntityRecognizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTrainingEntityRecognizer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTrainingEntityRecognizerInput
  },
  output: {
    shape: StopTrainingEntityRecognizerOutput
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
      shape: InternalServerException
    }
  ]
};
