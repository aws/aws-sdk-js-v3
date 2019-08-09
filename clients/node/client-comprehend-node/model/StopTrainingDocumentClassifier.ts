import { StopTrainingDocumentClassifierInput } from "./StopTrainingDocumentClassifierInput";
import { StopTrainingDocumentClassifierOutput } from "./StopTrainingDocumentClassifierOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
