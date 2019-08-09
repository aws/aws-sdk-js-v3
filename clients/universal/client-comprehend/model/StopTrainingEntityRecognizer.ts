import { StopTrainingEntityRecognizerInput } from "./StopTrainingEntityRecognizerInput";
import { StopTrainingEntityRecognizerOutput } from "./StopTrainingEntityRecognizerOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
