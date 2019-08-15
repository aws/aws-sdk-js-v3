import { StopTrainingDocumentClassifierInput } from "../shapes/StopTrainingDocumentClassifierInput";
import { StopTrainingDocumentClassifierOutput } from "../shapes/StopTrainingDocumentClassifierOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopTrainingDocumentClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTrainingDocumentClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTrainingDocumentClassifierInput
  },
  output: {
    shape: StopTrainingDocumentClassifierOutput
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
