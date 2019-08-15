import { UpdateBatchPredictionInput } from "../shapes/UpdateBatchPredictionInput";
import { UpdateBatchPredictionOutput } from "../shapes/UpdateBatchPredictionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBatchPrediction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBatchPrediction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateBatchPredictionInput
  },
  output: {
    shape: UpdateBatchPredictionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
